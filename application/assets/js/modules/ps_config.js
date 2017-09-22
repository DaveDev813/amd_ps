/*
 * Main PS Entry Point
 */


require.config({
    
    baseUrl:"http://localhost/JavaScript%20Notes/psfrontend_sample/application/assets/js",
    
    paths: {
        
        // Libraries
        sbadmin:    'libraries/sb-admin-2',
        jquery:     'libraries/jquery',
        bootstrap:  'libraries/bootstrap.min',
        metisMenu:  'libraries/metisMenu',
        vue:        'https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.min',
        template:   'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
        
        // Modules
        ps_core:    'modules/ps_core',
        
        
    }

});

require([ 'ps_core' ]);