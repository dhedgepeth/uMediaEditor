/* Global variable used in angular controller */
var jquery = {
    getLink: function (link) { //function to change image displayed on dashboard given a media link
        console.log('image changed from script');
        $('#sourceImage').attr('src', link);
        imageName = name;
        console.log();
    },
    imageName : ''
};

$(document).ready(function () {
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
        context.drawImage(document.getElementById('sourceImage'), 0, 0);
    }
});