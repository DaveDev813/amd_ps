
/*
 * PS CORE
 */

define ( 
    'ps_core', 
    ['jquery', 'template!https://www.338alab.com','sbadmin'], 
    function( $, htmlTemp ) {
    
    $('#daMod1').on('click', function(){
        $('.page-wrapper').html(htmlTemp.replace('<!DOCTYPE html>',''));
    });
    
    

});