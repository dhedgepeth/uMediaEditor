/* Global variable used in angular controller */
var jquery = {
    getLink: function (link, name) { //function to change image displayed on dashboard given a media link
        $('#sourceImage').attr('src', link);
        $('#save').attr('download', name); //sets the download 
    }
};

$(document).ready(function () {
    getSliders();

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    $('#save').attr('download', jquery.imageName); //sets the download 

    $('#sourceImage').on('load', function () {
        canvas.width = document.getElementById('sourceImage').width;
        canvas.height = document.getElementById('sourceImage').height;

        apply();
    });

    //apply function applies all filters using the values from sliders and redraws the image on the canvas
    function apply() { 

        filters = 'brightness(' + $('#brightRange').val() + '%)' +
            'contrast(' + $('#contrastRange').val() + '%)' +
            'saturate(' + $('#satRange').val() + '%)' + 
            'hue-rotate(' + $('#hueRange').val() + 'deg)';
        context.filter = filters;

        context.drawImage(document.getElementById('sourceImage'), 0, 0);

        $('#save').attr('href', canvas.toDataURL("image/png"));
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
});