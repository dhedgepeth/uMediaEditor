/* Global variable used in angular controller */
var jquery = {
    getLink: function (link) { //function to change image displayed on dashboard given a media link
        console.log('image changed from script');
        $('#sourceImage').attr('src', link);
        imageName = name;
        console.log();
    },
    imageName: '',
    testing
};

$(document).ready(function () {
    getSliders();

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    $('#sourceImage').on('load', function () {
        canvas.width = document.getElementById('sourceImage').width;
        canvas.height = document.getElementById('sourceImage').height;

        context.filter = 'grayscale(1)';

        apply();

        /* Allows for the user to download the image on the canvas locally 
        Eventually will allow the user to save the edited image in Umbraco */
        $('#save').attr('download', jquery.imageName);
        $('#save').attr('href', canvas.toDataURL("image/png"));
    });

    function apply() {
        //context.drawImage(document.getElementById('sourceImage'), 0, 0);
        console.log('called apply');
    }
});

function testing() {
    console.log('oh wow it works');
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
    })


    $('#shadowRange').on('input', function () {
        $('#shadowValue').text($('#shadowRange').val());
    })

    $('#contrastRange').on('input', function () {
        $('#contrastValue').text($('#contrastRange').val());
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