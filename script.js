﻿/* global function used to pass the media link from umediadash.controller.js */
var jquery = {
    getLink: function (link, name) { //takes the media link and media name as parameters
        $('#sourceImage').attr('src', link); //sets the source of the image to media link

        $('#download').attr('download', name); //sets the downloaded file's name to the media item's name
        $('#download').attr('href', canvas.toDataURL("image/png"));

        $('#sliders').show();
    }
};

$(document).ready(function () {
    $('#sliders').hide(); //sliders are hidden until an image is loaded
    $('#reset').hide();
    getSliders();

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    $('input[type="range"]').mouseleave(function () {
        $('#download').attr('href', canvas.toDataURL("image/png")); //updates the link to the canvas image each time the mouse leaves a slider
    });

    $('input[type="range"]').on('input', function () {
        $('#reset').show();
    });

    

    $('#sourceImage').on('load', function () {
        canvas.width = document.getElementById('sourceImage').width;
        canvas.height = document.getElementById('sourceImage').height;

        apply();

        $('#reset').click(function () {
            reset();
        });
    });

    //apply function applies all filters using the values from sliders and redraws the image on the canvas
    function apply() { 

        filters = 'brightness(' + $('#brightRange').val() + '%)' +
            'contrast(' + $('#contrastRange').val() + '%)' +
            'saturate(' + $('#satRange').val() + '%)' + 
            'hue-rotate(' + $('#hueRange').val() + 'deg)';
        context.filter = filters;

        context.drawImage(document.getElementById('sourceImage'), 0, 0);
    }

    //getSliders sets jquery listeners on all sliders and updates the displayed values
    function getSliders() { 
        //-------------------------------Color Adust Script----------------------------//
        $('#hueRange').on('input', function () {
            $('#hueValue').text($('#hueRange').val());
            apply();
        })

        $('#tintRange').on('input', function () {
            $('#tintValue').text($('#tintRange').val());
        })

        $('#tempRange').on('input', function () {
            $('#tempValue').text($('#tempRange').val());
        })

        $('#satRange').on('input', function () {
            $('#satValue').text($('#satRange').val());
            apply();
        })

        $('#vibRange').on('input', function () {
            $('#vibValue').text($('#vibRange').val());
        })


        //------------------------------------Detail Adjust Script-------------------------------//
        $('#sharpRange').on('input', function () {
            $('#sharpValue').text($('#sharpRange').val());
        })

        $('#blurRange').on('input', function () {
            $('#blurValue').text($('#blurRange').val());
        })

        $('#smoothRange').on('input', function () {
            $('#smoothValue').text($('#smoothRange').val());
        })


        //-------------------------------------Light Adjust Script------------------------------//
        $('#brightRange').on('input', function () {
            $('#brightValue').text($('#brightRange').val());
            apply();
        })


        $('#shadowRange').on('input', function () {
            $('#shadowValue').text($('#shadowRange').val());
        })

        $('#contrastRange').on('input', function () {
            $('#contrastValue').text($('#contrastRange').val());
            apply();
        })

        $('#exposureRange').on('input', function () {
            $('#exposureValue').text($('#exposureRange').val());
        })

        $('#blackRange').on('input', function () {
            $('#blackValue').text($('#blackRange').val());
        })

        $('#whiteRange').on('input', function () {
            $('#whiteValue').text($('#whiteRange').val());
        })

        $('#highlightsRange').on('input', function () {
            $('#highlightsValue').text($('#highlightsRange').val());
        })
    }

    function reset() {
        $('#hueRange').val(0);
        $('#hueValue').text($('#hueRange').val());

        $('#satRange').val(100);
        $('#satValue').text($('#satRange').val());

        $('#brightRange').val(100);
        $('#brightValue').text($('#brightRange').val());

        $('#contrastRange').val(100);
        $('#contrastValue').text($('#contrastRange').val());

        apply();
    }
});