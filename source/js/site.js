//= require "jquery/jquery"
//= require "subscribe"
//= require "jquery.easing/js/jquery.easing.min"
//= require "jquery.scrollTo/jquery.scrollTo"
//= require "passURL"
//= require "hypher/dist/jquery.hypher"
//= require "hyphenation-patterns/dist/browser/it"
//= require "bxslider-4/jquery.bxslider"

/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){
   // $('.hyphenate').hyphenate('it');
    $('.container_mobile').bxSlider();
    $('#bxslider').bxSlider({auto: true});
    ajaxform_subscribe("#signup-form-rw","#status-rw");
});


function sharemenu(){
    $(".share").fadeToggle('slow','linear');
}

$("#storyteller1").hover(function(){
    $("h2.name_story_teller1").css("display","block");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text("ATTRICE E TRADUTTRICE");
    $(".paragraph-story_teller p.data").html('“Mi piace specialmente <span class="key-words">piazza Ortaköy</span>, e la zona dove finisce il Bosforo.”');
});

$("#storyteller2").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","block");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text("SCRITTORE, DOCUMENTARISTA E REGISTA");
    $(".paragraph-story_teller p.data").html('“Troverete Vefa, <span class="key-words">il più noto venditore di Boza</span> proprio imboccando la prima strada sul lato destro dopo aver lasciato la moschea Süleymaniye dopo tre o quattro strade.”');
});

$("#storyteller3").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","block");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text("SCRITTRICE E GIORNALISTA");
    $(".paragraph-story_teller p.data").html('“Suggerirei di andare nel ristorante <span class="key-words">Yakup2</span> in Tunel <span class="key-words">Beyoglu</span> perché ci va molta gente, puoi capire molto sulla vita a Istanbul.”');
});

$("#storyteller4").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","block");
    $(".paragraph-story_teller h3.career").text("ARTISTA E SCRITTORE");
    $(".paragraph-story_teller p.data").html('“Se dovessi accompagnare un amico straniero , passeggerei con lui in Beyoglu, poi lo accompagnerei alla Moschea Blu,<span class="key-words"> &laquo; l’altra &raquo;</span> Istanbul, la città tradizionale.”');
});


