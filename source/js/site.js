//= require "vendor/jquery"
//= require "subscribe"
//= require "vendor/jquery.easing.min"
//= require "vendor/jquery.fadeloader"
//= require "vendor/jquery.scrollTo"
//= require "passURL"
//= require "vendor/jquery.slides"
//= require "vendor/jquery.hypher.js"
//= require "vendor/browser/it.js"
/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){
    $('.hyphenate').hyphenate('it');
    ajaxform_subscribe("#signup-form-rw","#status-rw");
    $('#slides').slidesjs({
        width: 940,
        height: 528,
        play: {
            active: true,
            auto: true,
            interval: 4000,
            swap: true
        }
    });


});

