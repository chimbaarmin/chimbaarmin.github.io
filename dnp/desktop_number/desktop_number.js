$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_one" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_one' ).css( 'display', 'block' );
	});
});

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_two" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_two' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_two' ).css( 'display', 'block' );
	});
});

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_three" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_three' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_three' ).css( 'display', 'block' );
	});
});

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_four" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_four' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_four' ).css( 'display', 'block' );
	});
});

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_five" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_five' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_five' ).css( 'display', 'block' );
	});
});

/* Animatons and color changes */

$(document).ready(function() {
	jQuery( '.fa-thumbs-up' ).mouseenter(function() {
		jQuery( this ).css( 'color', 'green' );
	});
	jQuery( '.fa-thumbs-up' ).mouseleave(function() {
		jQuery( this ).css( 'color', '#333333' );
	});
	jQuery( '.fa-thumbs-down' ).mouseenter(function() {
		jQuery( this ).css( 'color', 'red' );
	});
	jQuery( '.fa-thumbs-down' ).mouseleave(function() {
		jQuery( this ).css( 'color', '#333333' );
	});	
});