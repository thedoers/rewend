/**
 * Created by piermariacosina on 08/01/14.
 */


$("#storyteller1").hover(function(){
    $("h2.name_story_teller1").css("display","block");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text(locale.coauthors.author1.career);
    $(".paragraph-story_teller p.data").html(locale.coauthors.author1.data);
});

$("#storyteller2").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","block");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text(locale.coauthors.author2.career);
    $(".paragraph-story_teller p.data").html(locale.coauthors.author2.data);
});

$("#storyteller3").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","block");
    $("h2.name_story_teller4").css("display","none");
    $(".paragraph-story_teller h3.career").text(locale.coauthors.author3.career);
    $(".paragraph-story_teller p.data").html(locale.coauthors.author3.data);
});

$("#storyteller4").hover(function(){
    $("h2.name_story_teller1").css("display","none");
    $("h2.name_story_teller2").css("display","none");
    $("h2.name_story_teller3").css("display","none");
    $("h2.name_story_teller4").css("display","block");
    $(".paragraph-story_teller h3.career").text(locale.coauthors.author4.career);
    $(".paragraph-story_teller p.data").html(locale.coauthors.author3.data);
});