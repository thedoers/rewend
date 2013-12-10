//= require "vendor/jquery"
//= require "subscribe"
//= require "vendor/jquery.easing.min"
//= require "vendor/jquery.fadeloader"
//= require "vendor/jquery.scrollTo"
//= require "vendor/jquery.videoBG"
//= require "passURL"
//todo pulire via librerie js non usate e function non usate
/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){
    overlay("a.map");
    getQueryVars("/events/2013/thank-you-ixdt1113.html");

    ajaxform_subscribe("#signup-form-fb1213","#status-fb1213");

    $('#video').videoBG({
        mp4:'/js/videos/background_07052013.mp4',
        webm:'/js/videos/background_07052013.webm',
        ogv:'/js/videos/background_07052013.ogv',
        poster:'/js/videos/background_07052013.png',

        width: "100%",
        position: "relative",
        scale:true,
        loop: true,
        zIndex:-1
    });

    $('#container').fadeloader({

        mode: "children",
        preloadImg: '/loading.gif',
        preloadWidth: 36,
        preloadHeight: 36,
        displayType: 'inline',
        onComplete: "scroll()"
        });


});
function check_hash(){
    if (window.location.hash) {
        var params = (window.location.hash.substr(1)).split("&");

        for (i = 0; i < params.length; i++)
        {
            var a = params[i].split("=");
            var elem = $( window.location.hash.replace('#_', '#'));
            $.scrollTo(elem,400);
        }
    }
}

function scroll(){
   check_hash();

}
function overlay(element){
    $(element).hover(function(){
        $(this).find(".overlay").fadeOut(400);
    }, function() {
        $(this).find(".overlay").fadeIn(400);
    });

}

/*$('#header').click(function(){
    $('#header').toggleClass('flip');
});*/

