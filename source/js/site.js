//= require "jquery/jquery"
//= require "subscribe"
//= require "jquery.easing/js/jquery.easing.min"
//= require "jquery.scrollTo/jquery.scrollTo"
//= require "passURL"
//= require "hypher/dist/jquery.hypher"
//= require "hyphenation-patterns/dist/browser/it"
//= require "vendor/jquery.bxslider"
//= require "partials/storytellers"
/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){
    $('.hyphenate').hyphenate('it');
    $('.container_mobile').bxSlider();
    $('#bxslider').bxSlider({auto: true});
    ajaxform_subscribe("#signup-form-rw","#status-rw");
});


function sharemenu(){
    $(".share").fadeToggle('slow','linear');
}




