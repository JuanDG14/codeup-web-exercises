"use strict";

$(document).ready(function () {
    var htmlMethod = $("#leader").html("I'm the leader");
    $("#follower").html("I am the follower");
    var followerContent = $("#follower").html();
    if (followerContent === "I am the follower") {
        $("#leader").html("You are my subordinate");
    }

    var fontFamily = {
        "font-family": "sans-serif"
    }
    var fontFam = {
        "font-family": "serif"
    }
    $("#font-changer").click(function () {
        var currentFontFamily = $("body").css("font-family");
        // alert(currentFontFamily)
        if (currentFontFamily === "serif" || currentFontFamily === "Times") {
            $("body").css(fontFamily);
        } else {
            $("body").css(fontFam);

        }
    });

    // $("h2").mouseenter(function(){
    //     $("h2").addClass("highlight");
    //     $("h2").addClass("hotPinkIt");
    // });
    //
    // $("h2").mouseleave(function(){
    //     $("h2").removeClass("highlight");
    //     $("h2").removeClass("hotPinkIt");
    // });

    $("h2").hover(
        function(){
            $("h2").addClass("highlight");
            $("h2").addClass("hotPinkIt");
        },
        function (){
            $("h2").removeClass("highlight");
            $("h2").removeClass("hotPinkIt");
        }
    );



});