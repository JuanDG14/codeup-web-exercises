"use strict";

$('a').hover(
    function () {
        $(this).css('color', 'red');
    },
    function () {
        $(this).css('color', 'black');
    }
);

// $('#container').animate({'opacity': 0}, 5000, function () {
//     $(this).text('new text');
// }).animate({'opacity': 1}, 1000);


var code = [];
var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
$(document).keydown(function (event) {
    if (event.keyCode === 13){
        var loading = {
            'background-image': 'url("img/loading.gif")',
            'background-size': 'cover'
        }
        $('h1').html("Welcome to your new life. Enjoy!!")
        $('body').css(loading).delay(5000).fadeTo('slow', 1);

    }
    if (event.keyCode === 13 && konami.join() === code.join()) {
        // var loading = {
        //     'background-image': 'url("img/loading.gif")',
        //     'background-size': 'cover'
        // }
        // $('h1').html("Welcome to your new life. Enjoy!!")
        // $('body').css(loading).delay(5000).fadeTo('slow', 1);

        $('#tittle').animate({'opacity': 10}, 7000, function () {
            $(this).text("Welcome to the village hidden in the leaf !");
        }).animate({'opacity': 10}, 1000);

    } if (event.keyCode === 13 && konami.join() === code.join()) {
        // alert("Warning!!! consequences may impact the world around you!")
        // alert("Welcome to your new life. Enjoy!!");
        $('a').remove()
        $('p').remove()
        var konohavillage = {
            'background-image': 'url("img/village.jpeg")',
            'background-size': 'cover'
        }
        $("<audio></audio>").attr({
            'src': 'audio/Naruto-theme.mp3',
            'volume': 0.01,
            'autoplay': 'autoplay'
        }).appendTo("body")
        // $('body').css(konohavillage)
        $('body').fadeTo('slow', 0.05, function () {
            $(this).css(konohavillage);
        }).delay(1000).fadeTo('slow', 1);
        // $('.jumbotron').fadeIn()
        // $('h1').html("Welcome to the village hidden in the leaf !").css({
        //     'color': 'maroon',
        //     'margin-left': 'auto',
        //     'margin-right': 'auto',
        //     'font-family': 'Arial'
        // })
    } else if (event.keyCode === 13 && konami.join() !== code.join()) {
        $('a').remove()
        $('p').remove()
        var titan = {
            'background-image': 'url("img/titan.peg")',
            'background-size': 'cover'
        }
        $('body').fadeTo('slow', 0.05, function () {
            $(this).css(titan);
        }).delay(5000).fadeTo('slow', 1);
    }
    console.log(event.keyCode);
    code.push(event.keyCode);
});