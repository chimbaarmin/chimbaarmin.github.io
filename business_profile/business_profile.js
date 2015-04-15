/* =Footer JS*/

jQuery(document).ready(function(){
	jQuery( '.business_footer_module_trigger' ).click(function() {
		var $activeItem = jQuery( this ).attr( 'data-item' );
		jQuery( '.business_footer_module_trigger' ).removeClass('footer_trigger_active');
		jQuery( this ).addClass('footer_trigger_active');
		jQuery ( '.business_footer_module_sheet' ).removeClass('footer_sheet_active');
		jQuery( "." + $activeItem ).addClass('footer_sheet_active');
	});
});

jQuery(document).ready(function(){
	jQuery( '.fotter_sheet_buttons_link' ).click(function() {
		var $activeItem = jQuery( this ).attr( 'data-item' );
		jQuery( '.fotter_sheet_buttons_link' ).removeClass('buttons_link_active');
		jQuery( this ).addClass('buttons_link_active');
		jQuery ( '.footer_sheet_numbers' ).removeClass('sheet_numbers_active');
		jQuery( "." + $activeItem ).addClass('sheet_numbers_active');
	});
});

jQuery(document).ready(function(){
	jQuery( '.business_new_footer_trigger' ).click(function() {
		var $activeItem = jQuery( this ).attr( 'data-item' );
		jQuery( '.business_new_footer_trigger' ).removeClass('active_button');
		jQuery( this ).addClass('active_button');
		jQuery ( '.business_new_footer_numbers_wrapper' ).removeClass('active_item');
		jQuery( "." + $activeItem ).addClass('active_item');
	});
});