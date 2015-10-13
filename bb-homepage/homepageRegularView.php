<?php


if (!defined('ABSPATH'))
    exit;



/*
 * ============================ 
 * Home page geolocation script
 * ============================
 */

//delete_transient('homepage_map_data');



if (false === ($sMapJSVariables = get_transient('homepage_map_data'))) {

    global $wpdb;
    $aNumberPinsData = array();


    $sPhonenumberSQL = "    SELECT   
                                x.post_id as ID,
                                x.position
                            FROM (
                                    SELECT 
                                       t.post_id,
                                       t.ctp_popularity_weight,
                                       @rownum := @rownum + 1 AS position
                                    FROM tj_popularity t
                                    JOIN (SELECT @rownum := 0) r
                                    ORDER BY t.ctp_popularity_weight DESC
                                    LIMIT 10
                                 ) AS x 
                                     
                             UNION SELECT   
                                    x1.post_id as ID,
                                    x1.position
                             FROM (
                                     SELECT 
                                         t1.post_id,
                                         t1.ctp_popularity_weight,
                                         @rownum := @rownum + 1 AS position
                                     FROM tj_popularity t1
                                     JOIN (SELECT @rownum := 0) r1  
                                     ORDER BY t1.ctp_popularity_weight DESC
                                    ) AS x1 
                              JOIN (
                                    SELECT ID FROM `{$wpdb->posts}` 
                                    WHERE `post_type`='telefonnummer' 
                                    ORDER BY `post_date` DESC LIMIT 5) t2
                              ON x1.post_id = t2.ID";

    $aPhonenumberSQL = $wpdb->get_results($sPhonenumberSQL);


    if (!empty($aPhonenumberSQL)) {
        foreach ($aPhonenumberSQL as $oRecentPhonenumber) {
            $sLMP_HELPER = new LMP_HELPER($oRecentPhonenumber->ID);

            $aNumberPinsDataTemp = array();
            /* Set Vars */
            $aNumberPinsDataTemp['INTERNATIONAL_FORMAT'] = $sLMP_HELPER->INTERNATIONAL_FORMAT;
            $aNumberPinsDataTemp['COUNTRY_CODE'] = $sLMP_HELPER->COUNTRY_CODE;

            $aNumberPinsDataTemp['AREA_CODE'] = $sLMP_HELPER->AREA_CODE;
            $aNumberPinsDataTemp['AREA_CODE_LOCALIZED'] = phoneformat_Area_localized($sLMP_HELPER->AREA_CODE);

            $aNumberPinsDataTemp['PHONE_NUMBER'] = $sLMP_HELPER->PHONE_NUMBER;
            $aNumberPinsDataTemp['PHONE_NUMBER_LOCALIZED'] = phoneformat_Number_localized($sLMP_HELPER->PHONE_NUMBER);


            $aNumberPinsDataTemp['COUNTRY_NAME'] = $sLMP_HELPER->COUNTRY_NAME;
            $aNumberPinsDataTemp['AREA_NAME'] = $sLMP_HELPER->AREA_NAME;

            $aNumberPinsDataTemp['LOCAL_FORMAT'] = $sLMP_HELPER->LOCAL_FORMAT;
            $aNumberPinsDataTemp['LOCAL_FORMAT_LOCALIZED'] = phoneformat_AreaNumber_localized($sLMP_HELPER->LOCAL_FORMAT);

            $aNumberPinsDataTemp['GEOLOCATED'] = getGeolocatedCoordinates($aNumberPinsDataTemp['COUNTRY_NAME'] . $aNumberPinsDataTemp['AREA_NAME']);

            $aNumberPinsDataTemp['URL'] = get_post_permalink($oRecentPhonenumber->ID);



            $aNumberPinsDataTemp['NUMBER_RANK'] = $oRecentPhonenumber->position;

            $aNumberPinsData[] = $aNumberPinsDataTemp;

            unset($sLMP_HELPER);
            unset($aNumberPinsDataTemp);
        }

        $sMapJSVariables = "
                        <script>
                            var HOME_PAGE_MAP_DATA = '" . json_encode($aNumberPinsData) . "'
                        </script>";


        set_transient('homepage_map_data', $sMapJSVariables, 60 * MINUTE_IN_SECONDS);
    } else {
        $sMapJSVariables = "
                        <script>
                            var HOME_PAGE_MAP_DATA = ''
                        </script>";
    }
}

function getGeolocatedCoordinates($address, $force_refresh = false) {

    $address_hash = md5($address);

    $coordinates = get_transient($address_hash);

    if ($force_refresh || $coordinates === false) {

        $args = array('address' => urlencode($address), 'sensor' => 'false');
        $url = add_query_arg($args, 'http://maps.googleapis.com/maps/api/geocode/json');
        $response = wp_remote_get($url);

        if (is_wp_error($response))
            return;

        $data = wp_remote_retrieve_body($response);

        if (is_wp_error($data))
            return;

        if ($response['response']['code'] == 200) {

            $data = json_decode($data);

            if ($data->status === 'OK') {

                $coordinates = $data->results[0]->geometry->location;

                $cache_value['lat'] = $coordinates->lat;
                $cache_value['lng'] = $coordinates->lng;

                // cache coordinates for 3 months
                set_transient($address_hash, $cache_value, 3600 * 24 * 30 * 3);
                $data = $cache_value;
            } elseif ($data->status === 'ZERO_RESULTS') {
                return false;
            } elseif ($data->status === 'INVALID_REQUEST') {
                return false;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        // return cached results
        $data = $coordinates;
    }

    return $data;
}

/*
 * ============================ 
 * END OF: Home page geolocation script
 * ============================
 */


require_once 'headerHomepageRegular.php';
?>


<?php echo $sMapJSVariables; ?>

<script>
    
    var _ZOOM_LVL = <?= (get_bloginfo('language') == 'en-EN') ? 4 : 7; ?>;
    var _LANG = {
        PHONE_NUMBER:'<?= __('Phone number:', 'strictthemes-child'); ?>',
        AREA_CODE:'<?= __('Area code:', 'strictthemes-child'); ?>',
        COUNTRY:'<?= __('Country:', 'strictthemes-child'); ?>',
        CITY_STATE:'<?= __('City, state/Service:', 'strictthemes-child'); ?>',
        RANK:'<?= __('Number rank:', 'strictthemes-child'); ?>'
    };
    
    
</script>


<div class="home_header">
    <div class="home_header_menu">

    </div>
    <div class="home_header_name">
        <h1 class="home_header_name_h1"><?= __('Number-Index.com - Phone Number Profiles & Caller Reviews', 'strictthemes-child'); ?></h1>
    </div>
</div>
<div id="map_canvas"></div>
<div class="home_content">
    <div class="home_content_header">
        <h2 class="home_content_h2"><?= __('Review Phone Numbers & Check Caller Identities', 'strictthemes-child'); ?></h2> 
    </div>
    <div class="home_content_menu">
        <div class="home_content_menu_wrapper">
            <ul class="home_content_menu_ul">
                <li class="home_content_menu_ul_li">
                    <i class="fa fa-info-circle fa-2x home_content_icons"></i>
                </li>
                <li class="home_content_menu_ul_li">
                    <?php
                    switch (get_bloginfo('language')) {
                        case 'en-EN':
                            $sHelpURL = get_bloginfo('url') . "/about-us";
                            break;
                        default:
                            $sHelpURL = get_bloginfo('url') . "/ueber-uns";
                            break;
                    }
                    ?>    

                    <a href="<?= $sHelpURL; ?>" class="home_content_menu_link"><i class="fa fa-question-circle fa-2x home_content_icons"></i></a>
                </li>
                <li class="home_content_menu_ul_li">
                    <?php
                    switch (get_bloginfo('language')) {
                        case 'en-EN':
                            $sRemoveEntryURL = get_bloginfo('url') . "/remove-entry";
                            break;
                        default:
                            $sRemoveEntryURL = get_bloginfo('url') . "/eintrag-loschen";
                            break;
                    }
                    ?>

                    <a href="<?= $sRemoveEntryURL; ?>" class="home_content_menu_link"><i class="fa fa-times-circle fa-2x home_content_icons"></i></a>


                </li>
            </ul>
        </div>
    </div>
    <div class="home_content_search">
        <form action="/" method="get">
            <input name="s" type="text" value="" placeholder="<?= __('Search for ANY Phone Number in USA/Canada', 'strictthemes-child'); ?>" class="home_content_search_input"><button class="search home_content_search_button"><?= __('Search', 'strictthemes-child'); ?></button>
        </form>
    </div>
    <div class="home_content_help">
        <a href="#" class="home_content_help_a" data-popbox="more_info_help_pop"><?= __('More Info', 'strictthemes-child'); ?></a>
    </div>
</div>
<div class="home_footer">
    <div class="home_footer_links">
        <?php
        /*$menuParameters = array(
            'theme_location' => 'menu-2',
            'sort_column' => 'menu_order',
            'container' => '',
            'container_class' => false,
            'container_id' => '',
            'echo' => false,
            'depth' => 0,
            'fallback_cb' => 'wp_page_menu',
            'items_wrap' => '%3$s',
            'depth' => 1,
        );

        echo strip_tags(wp_nav_menu($menuParameters), '<a>');*/
        ?>
        <a class="home_footer_link active_footer_button" data-item="item_a"><?= __('Today', 'strictthemes-child'); ?></a>
        <a class="home_footer_link" data-item="item_b"><?= __('Yesterday', 'strictthemes-child'); ?></a>
        <a class="home_footer_link" data-item="item_c"><?= __('Last 7 Days', 'strictthemes-child'); ?></a>
        <a class="home_footer_link" data-item="item_d"><?= __('Total', 'strictthemes-child'); ?></a>
    </div>
    <div class="home_footer_reveal">
        <i class="fa fa-chevron-circle-up fa-2x slide-btn"></i>
    </div>
    <div class="home_footer_copyright">
        <p class="home_footer_copyright_p"><?= __('Copyright &copy; 2015 Number-Index.com.', 'strictthemes-child'); ?></p>
    </div>
    <div class="home_clear"></div>











    <?php
    //delete_transient('homepage_footer_data');

    if (false === ($sFooterReturnHTML = get_transient('homepage_footer_data'))) {


        // TODO: setup cache
        // DE-66, EN-189, FA-82
        switch (get_bloginfo('language')) {
            case 'en-EN':
                $sCountryID = 189;
                break;
            case 'fa-IR':
                $sCountryID = 82;
                break;
            default :
                $sCountryID = 66;
        }

        $sFooterReturnHTML = '';

        $sCityQuerySQL = "  SELECT * ,t2.*
                            FROM `lmp_cities` t0
                            JOIN (SELECT city_id, COUNT(*) as cnt FROM `lmp_locations` GROUP BY `city_id` ORDER BY cnt) t2 ON t2.city_id = t0.city_id
                            WHERE t0.city_id IN (SELECT t1.city_id FROM (SELECT city_id, COUNT(*) as cnt FROM `lmp_locations` GROUP BY `city_id` ORDER BY cnt) AS t1)
                            AND t0.country_id = $sCountryID AND t0.city_is_service = 0 AND t0.city_is_mobile = 0
                            ORDER BY t2.cnt DESC LIMIT 5";


        $oCitiesEntity = $wpdb->get_results($sCityQuerySQL);

        if (!empty($oCitiesEntity)) {

            $sFooterReturnHTML .= "<div class='home_footer_buttons'>";
            foreach ($oCitiesEntity as $key => $oCity) {
                // build up city-controls buttons
                $sActive = ($key === 0) ? "active_button" : "";

                $sFooterReturnHTML .= "<a class='home_footer_trigger $sActive' data-item='item_$key'>{$oCity->city_name}</a>";
            }
            $sFooterReturnHTML .= "</div>";

            $sFooterReturnHTML .= "<div class='home_footer_numbers'>";
            foreach ($oCitiesEntity as $key => $oCity) {

                $sActive = ($key === 0) ? "active_item" : "";
                $sFooterReturnHTML .= "<div class='home_footer_numbers_wrapper item_$key $sActive'>";
                // Most Popular

                $sMostPopularQuery = "
                                    SELECT   
                                        x.post_id as ID,
                                        x.position
                                    FROM (
                                            SELECT 
                                               t.post_id,
                                               t.ctp_popularity_weight,
                                               @rownum := @rownum + 1 AS position
                                            FROM tj_popularity t
                                            JOIN (SELECT @rownum := 0) r
                                            ORDER BY t.ctp_popularity_weight DESC 
                                         ) AS x
                                         JOIN (SELECT city_id, pid FROM `lmp_locations` WHERE city_id = {$oCity->city_id}) as y where y.pid = x.post_id
                                         LIMIT 5";

                $oMostPopularPostsEntity = $wpdb->get_results($sMostPopularQuery);
                if (!empty($oMostPopularPostsEntity)) {
                    $sFooterReturnHTML .= "<div class='home_footer_numbers_subwrapper_popular'>";
                    $sFooterReturnHTML .= "<h3 class='home_footer_numbers_header'>". sprintf(__('Popular Numbers in %s', 'strictthemes-child'),$oCity->city_name)."</h3>";
                    $sFooterReturnHTML .= "<ul class='home_footer_numbers_ul'>";
                    foreach ($oMostPopularPostsEntity as $oPostPopular) {
                        $sFooterReturnHTML .= "<li class='home_footer_numbers_li'><a href='" . get_permalink($oPostPopular->ID) . "' title='".get_the_title($oPostPopular->ID).", {$oCity->city_name}' class='home_footer_numbers_link'>" . get_the_title($oPostPopular->ID) . "</a></li>";
                    }
                    $sFooterReturnHTML .= "</ul>";
                    $sFooterReturnHTML .= "</div>";
                }

               

                // Most Recent

                $sMostRecentQuery = "SELECT t1.ID 
                                 FROM {$wpdb->posts} t1
                                 JOIN (SELECT city_id, pid FROM `lmp_locations` WHERE city_id = {$oCity->city_id}) as t2 where t2.pid = t1.ID  
                                 ORDER BY t1.post_date DESC
                                 LIMIT 5";


                $oMostRecentQuery = $wpdb->get_results($sMostRecentQuery);
                if (!empty($oMostRecentQuery)) {
                    $sFooterReturnHTML .= "<div class='home_footer_numbers_subwrapper_recent'>";
                    $sFooterReturnHTML .= "<h3 class='home_footer_numbers_header'>". sprintf(__('Recent Numbers in %s', 'strictthemes-child'),$oCity->city_name)."</h3>";
                    $sFooterReturnHTML .= "<ul class='home_footer_numbers_ul'>";
                    foreach ($oMostRecentQuery as $oPostRecent) {
                        $sFooterReturnHTML .= "<li class='home_footer_numbers_li'><a href='" . get_permalink($oPostRecent->ID) . "' title='".get_the_title($oPostRecent->ID).", {$oCity->city_name}' class='home_footer_numbers_link'>" . get_the_title($oPostRecent->ID) . "</a></li>";
                    }
                    $sFooterReturnHTML .= "</ul>";
                    $sFooterReturnHTML .= "</div>";
                }
  
                



                // Most Commented

                $sMostCommentedQuery = "SELECT t1.ID 
                                 FROM {$wpdb->posts} t1
                                 JOIN (SELECT city_id, pid FROM `lmp_locations` WHERE city_id = {$oCity->city_id}) as t2 where t2.pid = t1.ID  
                                 ORDER BY t1.comment_count DESC
                                 LIMIT 5";


                $oMostCommentedQuery = $wpdb->get_results($sMostCommentedQuery);
                if (!empty($oMostCommentedQuery)) {
                    $sFooterReturnHTML .= "<div class='home_footer_numbers_subwrapper_commented'>";
                    $sFooterReturnHTML .= "<h3 class='home_footer_numbers_header'>". sprintf(__('Top-commented Numbers in %s', 'strictthemes-child'),$oCity->city_name)."</h3>";
                    $sFooterReturnHTML .= "<ul class='home_footer_numbers_ul'>";
                    foreach ($oMostCommentedQuery as $oPostCommented) {
                        $sFooterReturnHTML .= "<li class='home_footer_numbers_li'><a href='" . get_permalink($oPostCommented->ID) . "' title='".get_the_title($oPostCommented->ID).", {$oCity->city_name}' class='home_footer_numbers_link'>" . get_the_title($oPostCommented->ID) . "</a></li>";
                    }
                    $sFooterReturnHTML .= "</ul>";
                    $sFooterReturnHTML .= "</div>";
                }

                $sFooterReturnHTML .= "</div><!-- .home_footer_numbers_wrapper -->";
            }
            $sFooterReturnHTML .= "</div><!-- .home_footer_numbers -->";
        }
        
        set_transient('homepage_footer_data', $sFooterReturnHTML, 60 * MINUTE_IN_SECONDS);
    }
    ?>
    <div class="home_footer_content">
        <div class="home_footer_content_wrapper">
            <?= $sFooterReturnHTML; ?>
        </div>
        <div class="clear"></div>
        <?php if (function_exists('dynamic_sidebar') && is_active_sidebar('homepage-footer_fullwidth')): ?>
            <div class="homepage_footer_fullwidth_sidebar">
                <? dynamic_sidebar('homepage-footer_fullwidth'); ?>
            </div>
            <div class="clear"><!-- --></div>
        <?php endif; ?>
    </div>

























</div>
<div class="home_popups">
    <div id="more_info_help_pop" class="popbox">
        <h4 class="more_info_help_pop_h4"><?= __('Introducing: Number-Index.com', 'strictthemes-child'); ?></h4>
        <h2 class="more_info_help_pop_h2"><?= __('Reverse Phone Number Look Up System & Rating Database', 'strictthemes-child'); ?></h2>
        <p class="more_info_help_pop_p"><?= __('We provide publically available information like Reputation, Background, Location and Reviews on ANY phone number worldwide. Based on our unique Popularity and Threat Score, you can determine the purpose of a call from an unknown number and share your own experience about a caller.', 'strictthemes-child'); ?></p>
        <p class="more_info_help_pop_p_strong"><?= __('Help us in our mission to index and review EVERY phone number on the planet.', 'strictthemes-child'); ?></p>
    </div>
</div>
<div class="home_stats_divs">
    <div class="home_stats">
        <div class="home_stats_content">
            <h4 class="home_stats_content_h4"><?= __('Activity report', 'strictthemes-child'); ?></h4>
            <div class="home_stats_content_close">
                <i class="fa fa-times-circle fa-2x close-btn"></i>
            </div>

            <?= do_shortcode('[NI-statistics][/NI-statistics]'); ?>
        </div>
    </div>
</div>
<div class="home_marker_info_divs">
    <div class="home_marker_info">
        <h4 class="marker_info_h2"></h4>
        <div class="marker_info_basic">
            <ul class="marker_info_basic_ul">
                <li class="marker_info_basic_li area_code_li"></li>
                <li class="marker_info_basic_li country_li"></li>
                <li class="marker_info_basic_li city_service_li"></li>
                <li class="marker_info_basic_li number_rank_li"></li>
                <div class="more_info_basic_link">
                    <a href="" class="marker_info_basic_li_a"><?= __('More info', 'strictthemes-child'); ?></a>
                </div>
            </ul>
        </div>
    </div>
</div>





<?php require_once 'footerHomepageRegular.php'; ?>
