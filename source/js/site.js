//= require "vendor/jquery"
//= require "subscribe"
//= require "vendor/jquery.easing.min"
//= require "vendor/jquery.fadeloader"
//= require "vendor/jquery.scrollTo"
//= require "passURL"
//= require "vendor/jquery.slides"
/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){
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


function sharemenu(){
    $(".share").fadeToggle('slow','linear');
}

$("#storyteller1").hover(function(){
    $("h2.name_story_teller1").css("display","block");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text("SCRITTRICE");
    $(".paragraph-story_teller p.data").html('“Suggerirei di andare nel ristorante <span class="key-words">Yakup2</span> in Tunel Beyoglu perché ci va molta gente, puoi capire molto sulla vita a Istanbul.”');
});

$("#storyteller2").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","block");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text("CASALINGHA");
    $(".paragraph-story_teller p.data").html('“<span class="key-words">Yakup2</span> in Tunel Beyoglu perché ci va molta gente, puoi capire molto sulla vita a Istanbul.”');
});

$("#storyteller3").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","block");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text("SCRITTRICE E GIORNALISTA");
    $(".paragraph-story_teller p.data").html('“ nel ristorante <span class="key-words">Yakup2</span> in Tunel <span class="key-words">Beyoglu</span> perché ci va molta gente, puoi capire molto sulla vita a Istanbul.”');
});

$("#storyteller4").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","block");
    $(".paragraph-story_teller h3.career").text("FOTOGRAFO, PROFESSORE");
    $(".paragraph-story_teller p.data").html('“ di andare nel ristorante <span class="key-words">Yakup2</span> in Tunel <span class="key-words">Beyoglu</span> perché ci va molta gente, puoi capire molto sulla vita a Istanbul.”');
});


