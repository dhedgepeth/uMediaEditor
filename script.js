/* Global variable used in angular controller */
var jquery = {
    getLink: function (link) { //function to change image displayed on dashboard given a media link
        console.log('image changed from script');
        $('#sourceImage').attr('src', link);
        imageName = name;
    },
    imageName: ''
};

$(document).ready(function () {
    getSliders();

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');


    $('#sourceImage').on('load', function () {
        canvas.width = document.getElementById('sourceImage').width;
        canvas.height = document.getElementById('sourceImage').height;

        apply();
    });

    $('#save').click(function () {
        apply();
        console.log('clicked save')
        $('#save').attr('download', jquery.imageName);
        $('#save').attr('href', canvas.toDataURL("image/png"));
    })

    function apply() {

        filters = 'brightness(' + $('#brightRange').val() + '%)' + 'contrast(' + $('#contrastRange').val() + '%)';
        context.filter = filters;

        context.drawImage(document.getElementById('sourceImage'), 0, 0);
    }

    function getSliders() {
        //-------------------------------Color Adust Script----------------------------//
        $('#hueRange').on('input', function () {
            $('#hueValue').text($('#hueRange').val());
        })

        $('#tinitRange').on('input', function () {
            $('#tinitValue').text($('#tinitRange').val());
        })

        $('#tempRange').on('input', function () {
            $('#tempValue').text($('#tempRange').val());
        })

        $('#satRange').on('input', function () {
            $('#satValue').text($('#satRange').val());
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