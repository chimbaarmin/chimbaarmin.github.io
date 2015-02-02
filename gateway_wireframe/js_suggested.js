/*
Gateway JS
Date: 02. 02. 2015.
Author: Armin
Version: 1.0
*/

// Tooltips

$(function() {
	$( ".fa, .selectOwner, .selectCall, .gateway_input, .more_info, .comment_box" ).tooltip();
});

// Step 1
		
	jQuery( ".fa-thumbs-up" ).click(function() {
		jQuery( ".gateway_step3, .gateway_step2negative, .selectMe, .selectFriend, .selectCompany, .selectUnknown, .selectMePrivate, .selectMeCompany, .selectFriendPrivate, .selectFriendCompany" ).css("display", "none");
		jQuery( ".gateway_step2positive, .selectOwner" ).css("display", "block");
		jQuery( ".more_info_box" ).val(null);
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".gateway_step1" ).css("display", "none");
	});
	
	jQuery( ".fa-thumbs-down" ).click(function() {
		jQuery( ".gateway_step3, .gateway_step2positive, .selectAccepted, .selectRejected, .selectAcceptedPrivate, .selectAcceptedCompany, .selectAcceptedUnclear, .selectRejectedFirst, .selectRejectedBefore" ).css("display", "none");
		jQuery( ".gateway_step2negative, .selectCall" ).css("display", "block");
		jQuery( ".more_info_box" ).val(null);
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".gateway_step1" ).css("display", "none");
	});
	
// Step 2
		
// Variables
	
	var $summary;
	var $companyname;
	var $mycompanyname;
	var $friendcompanyname;
	var $namerejectedfirst;
	var $namerejectedbefore;
	var $moreinfo;
		
// 1st level positive - selectOwner
	
	jQuery( "a.linkMe" ).click(function() {
		$summary = "This number is owned by #me.";
        jQuery( ".selectOwner" ).css("display", "none");
		jQuery( ".selectMe" ).css("display", "block");
    });
	jQuery( "a.linkFriend" ).click(function() {
		$summary = "This number is owned by my #friend.";
        jQuery( ".selectOwner" ).css("display", "none");
		jQuery( ".selectFriend" ).css("display", "block");
    });
	jQuery( "a.linkCompany" ).click(function() {
		$summary = "This number is owned by #company.";
        jQuery( ".selectOwner" ).css("display", "none");
		jQuery( ".selectCompany" ).css("display", "block");
    });
	jQuery( "a.linkUnknown" ).click(function() {
		$summary = "This number is owned by #unknown.";
        jQuery( ".selectOwner" ).css("display", "none");
		jQuery( ".selectUnknown" ).css("display", "block");
    });
		
// 2nd level positive - selectMe, selectFriend, selectCompany, selectUnknown
		
// selectMe
	
	jQuery( "a.selectMeBack" ).click(function() {
		$summary = "This number is owned by #me.";
        jQuery( ".selectOwner" ).css("display", "block");
		jQuery( ".selectMe" ).css("display", "none");
    });
		
	jQuery( "a.linkMePrivate" ).click(function() {
		$summary = "This number is owned by #me. It is my #private_number.";
        jQuery( ".selectMe" ).css("display", "none");
		jQuery( ".selectMePrivate" ).css("display", "block");
    });
		
	jQuery( "a.linkMeCompany" ).click(function() {
		$summary = "This number is owned by #me. It is a #company_number.";
        jQuery( ".selectMe" ).css("display", "none");
		jQuery( ".selectMeCompany" ).css("display", "block");
    });

// selectFriend
		
	jQuery( "a.selectFriendBack" ).click(function() {
		$summary = "This number is owned by my friend.";
        jQuery( ".selectOwner" ).css("display", "block");
		jQuery( ".selectFriend" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkFriendPrivate" ).click(function() {
		$summary = "This number is owned by my #friend. It is a #private_number.";
        jQuery( ".selectFriend" ).css("display", "none");
		jQuery( ".selectFriendPrivate" ).css("display", "block");
    });
		
	jQuery( "a.linkFriendCompany" ).click(function() {
		$summary = "This number is owned by my #friend. It is a #company_number.";
        jQuery( ".selectFriend" ).css("display", "none");
		jQuery( ".selectFriendCompany" ).css("display", "block");
    });
		
	jQuery( "a.linkFriendUnknown" ).click(function() {
		$summary = "This number is owned by my #friend. I #do_not_know if it is a company or private number.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
// selectCompany
		
	jQuery( "a.selectCompanyBack" ).click(function() {
		$summary = "This number is owned by a #company.";
        jQuery( ".selectOwner" ).css("display", "block");
		jQuery( ".selectCompany" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkCompanyName" ).click(function() {
		$companyname = jQuery( "input.inputCompanyName" ).val();
		if ( $companyname.length < 3 ) {
			alert ( "Company name must contain at least three letters." );
		}
		else {
			$summary = "This number is owned by a #company called #" + $companyname + ".";
			jQuery("textarea.hashtag_box").val($summary);
			jQuery( ".gateway_step3" ).css("display", "block");		
			jQuery( ".more_info" ).css("display", "block");
		}
    });
		
	jQuery( "a.linkCompanyUnknown" ).click(function() {
		$summary = "This number is owned by a #company. I #do_not_know its name.";
		jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
	
// selectUnknown
		
	jQuery( "a.selectUnknownBack" ).click(function() {
		$summary = "This number is owned by #unknown.";
        jQuery( ".selectOwner" ).css("display", "block");
		jQuery( ".selectUnknown" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkUnknownOnce" ).click(function() {
		$summary = "This number is owned by #unknown. I was #called_once.";
		jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkUnknownTwice" ).click(function() {
		$summary = "This number is owned by #unknown. I was #called_twice.";
		jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkUnknownSeveral" ).click(function() {
		$summary = "This number is owned by #unknown. I was #called_several_times.";
		jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
/* 3rd level positive - selectMePrivate, selectMeCompany, selectFriendPrivate, selectFriendCompany, selectFriendUnkown, 
selectCompanyName, selectCompanyUnknown */
		
// selectMePrivate
		
	jQuery( "a.selectMePrivateBack" ).click(function() {
		$summary = "This number is owned by #me. It is my #private_number.";
        jQuery( ".selectMe" ).css("display", "block");
		jQuery( ".selectMePrivate" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkMePrivateMobile" ).click(function() {
		$summary = "This number is owned by #me. It is my #private_number on a #mobile_line.";
		jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkMePrivateLandline" ).click(function() {
		$summary = "This number is owned by #me. It is my #private_number on a #landline.";
		jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
// selectMeCompany
		
	jQuery( "a.selectMeCompanyBack" ).click(function() {
		$summary = "This number is owned by #me. It is a #company_number.";
        jQuery( ".selectMe" ).css("display", "block");
		jQuery( ".selectMeCompany" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkMeCompanyName" ).click(function() {
		$mycompanyname = jQuery( "input.inputMeCompanyName" ).val();
		if ( $mycompanyname.length < 3 ) {
			alert ( "Company name must contain at least three letters." );
		}
		else {
			$summary = "This number is owned by #me. It is a #company_number. Company name: #" + $mycompanyname + ".";
			jQuery("textarea.hashtag_box").val($summary);
			jQuery( ".gateway_step3" ).css("display", "block");
			jQuery( ".more_info" ).css("display", "block");
		}
    });
		
// selectFriendPrivate
		
	jQuery( "a.selectFriendPrivateBack" ).click(function() {
		$summary = "This number is owned by my #friend. It is a #private_number.";
        jQuery( ".selectFriend" ).css("display", "block");
		jQuery( ".selectFriendPrivate" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkFriendPrivateMobile" ).click(function() {
		$summary = "This number is owned by my #friend. It is a #private_number on a #mobile_line.";
		jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkFriendPrivateLandline" ).click(function() {
		$summary = "This number is owned by my #friend. It is a #private_number on a #landline.";
		jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
// selectFriendCompany
		
	jQuery( "a.selectFriendCompanyBack" ).click(function() {
		$summary = "This number is owned by my #friend. It is a #company_number.";
        jQuery( ".selectFriend" ).css("display", "block");
		jQuery( ".selectFriendCompany" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkFriendCompanyName" ).click(function() {
		$friendcompanyname = jQuery( "input.inputFriendCompanyName" ).val();
		if ( $friendcompanyname.length < 3 ) {
			alert ( "Company name must contain at least three letters." );
		}
		else {
			$summary = "This number is owned by my #friend. It is a #company_number. Company name: #" + $friendcompanyname + ".";
			jQuery("textarea.hashtag_box").val($summary);
			jQuery( ".gateway_step3" ).css("display", "block");
			jQuery( ".more_info" ).css("display", "block");
		}
    });
		
// 1st level negative - selectCall
	
	jQuery( "a.linkAccepted" ).click(function() {
		$summary = "I #accepted the call.";
        jQuery( ".selectCall" ).css("display", "none");
		jQuery( ".selectAccepted" ).css("display", "block");
    });
		
	jQuery( "a.linkRejected" ).click(function() {
		$summary = "I #rejected the call.";
        jQuery( ".selectCall" ).css("display", "none");
		jQuery( ".selectRejected" ).css("display", "block");
    });
		
// 2nd level negative - selectAccepted, selectRejected
		
// selectAccepted
		
	jQuery( "a.selectAcceptedBack" ).click(function() {
		$summary = "I #accepted the call.";
        jQuery( ".selectCall" ).css("display", "block");
		jQuery( ".selectAccepted" ).css("display", "none");
    });
		
	jQuery( "a.linkAcceptedPrivate" ).click(function() {
		$summary = "I #accepted the call. It was a #private_call.";
        jQuery( ".selectAccepted" ).css("display", "none");
		jQuery( ".selectAcceptedPrivate" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedCompany" ).click(function() {
		$summary = "I #accepted the call. It was a #company_call.";
        jQuery( ".selectAccepted" ).css("display", "none");
		jQuery( ".selectAcceptedCompany" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedUnclear" ).click(function() {
		$summary = "I #accepted the call. Caller is #unknown.";
        jQuery( ".selectAccepted" ).css("display", "none");
		jQuery( ".selectAcceptedUnclear" ).css("display", "block");
    });
		
// selectRejected
		
	jQuery( "a.selectRejectedBack" ).click(function() {
		$summary = "I #rejected the call.";
        jQuery( ".selectCall" ).css("display", "block");
		jQuery( ".selectRejected" ).css("display", "none");
    });
		
	jQuery( "a.linkRejectedFirst" ).click(function() {
		$summary = "I #rejected the call. I received it for the #first_time.";
        jQuery( ".selectRejected" ).css("display", "none");
		jQuery( ".selectRejectedFirst" ).css("display", "block");
    });
		
	jQuery( "a.linkRejectedBefore" ).click(function() {
		$summary = "I #rejected the call. I received it #before.";
        jQuery( ".selectRejected" ).css("display", "none");
		jQuery( ".selectRejectedBefore" ).css("display", "block");
    });
		
/* 3rd level negative - selectAcceptedPrivate, selectAcceptedCompany, selectAcceptedUnclear, selectRejectedFirst, selectRejectedBefore */
		
// selectAcceptedPrivate
		
	jQuery( "a.selectAcceptedPrivateBack" ).click(function() {
		$summary = "I #accepted the call. It was a #private_call.";
        jQuery( ".selectAccepted" ).css("display", "block");
		jQuery( ".selectAcceptedPrivate" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkAcceptedPrivateUnfriendly" ).click(function() {
		$summary = "I #accepted the call. It was a #private_call. Caller was #unfriendly.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedPrivateAnnoying" ).click(function() {
		$summary = "I #accepted the call. It was a #private_call. Caller was #annoying.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedPrivateScam" ).click(function() {
		$summary = "I #accepted the call. It was a #private_call. Call was a #scam.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedPrivateThreat" ).click(function() {
		$summary = "I #accepted the call. It was a #private_call. I reveived a #threat.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
// selectAcceptedCompany
		
	jQuery( "a.selectAcceptedCompanyBack" ).click(function() {
		$summary = "I #accepted the call. It was a #company_call.";
        jQuery( ".selectAccepted" ).css("display", "block");
		jQuery( ".selectAcceptedCompany" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkAcceptedCompanyScam" ).click(function() {
		$summary = "I #accepted the call. It was a #company_call. Call was a #scam.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedCompanyThreat" ).click(function() {
		$summary = "I #accepted the call. It was a #company_call. I received a #threat.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedCompanyAdvertising" ).click(function() {
		$summary = "I #accepted the call. It was a #phone_advertising #company_call.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedCompanyTheft" ).click(function() {
		$summary = "I #accepted the call. It was a #company_call. They attempted #data_theft.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
// selectAcceptedUnclear
		
	jQuery( "a.selectAcceptedUnclearBack" ).click(function() {
		$summary = "I #accepted the call. Caller is #unknown.";
        jQuery( ".selectAccepted" ).css("display", "block");
		jQuery( ".selectAcceptedUnclear" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkAcceptedUnclearOnce" ).click(function() {
		$summary = "I #accepted the call. Caller is #unknown. I was #called_once.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");;
    });
		
	jQuery( "a.linkAcceptedUnclearTwice" ).click(function() {
		$summary = "I #accepted the call. Caller is #unknown. I was #called_twice.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkAcceptedUnclearSeveral" ).click(function() {
		$summary = "I #accepted the call. Caller is #unknown. I was #called_several_times.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
// selectRejectedFirst
		
	jQuery( "a.selectRejectedFirstBack" ).click(function() {
		$summary = "I #rejected the call. I received it for the #first_time.";
        jQuery( ".selectRejected" ).css("display", "block");
		jQuery( ".selectRejectedFirst" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkRejectedFirstUnknown" ).click(function() {
		$summary = "I #rejected the call. I received it for the #first_time and caller is #unknown.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkRejectedFirstKnown" ).click(function() {
		$namerejectedfirst = jQuery( "input.inputKnownCompanyNameRejectedFirst" ).val();
		if ( $namerejectedfirst.length < 3 ) {
			alert ( "Caller name must contain at least three letters." );
		}
		else {
			$summary = "I #rejected the call. I received it for the #first_time and the call was made by #" + $namerejectedfirst + ".";
			jQuery("textarea.hashtag_box").val($summary);
			jQuery( ".gateway_step3" ).css("display", "block");
			jQuery( ".more_info" ).css("display", "block");
		}
    });
		
// selectRejectedBefore
		
	jQuery( "a.selectRejectedBeforeBack" ).click(function() {
		$summary = "I #rejected the call. I received it #before.";
        jQuery( ".selectRejected" ).css("display", "block");
		jQuery( ".selectRejectedBefore" ).css("display", "none");
		jQuery( ".more_info" ).css("display", "none");
		jQuery( ".more_info_box" ).val(null);
    });
		
	jQuery( "a.linkRejectedBeforeUnknown" ).click(function() {
		$summary = "I #rejected the call. I received it #before and caller is #unknown.";
        jQuery("textarea.hashtag_box").val($summary);
		jQuery( ".gateway_step3" ).css("display", "block");
		jQuery( ".more_info" ).css("display", "block");
    });
		
	jQuery( "a.linkRejectedBeforeKnown" ).click(function() {
		$namerejectedbefore = jQuery( "input.inputKnownCompanyNameRejectedBefore" ).val();
		if ( $namerejectedbefore.length < 3 ) {
			alert ( "Caller name must contain at least three letters." );
		}
		else {
			$summary = "I #rejected the call. I received it #before and the call was made by #" + $namerejectedbefore + ".";
			jQuery("textarea.hashtag_box").val($summary);
			jQuery( ".gateway_step3" ).css("display", "block");
			jQuery( ".more_info" ).css("display", "block");
		}           			
    });
		
// more_info_box
		
	jQuery( ".more_info_box" ).change(function() {
		jQuery("textarea.hashtag_box").val( $summary + " " + jQuery( this ).val() );
	});