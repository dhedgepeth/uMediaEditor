let canvas;
let context;

var jquery = {
    getLink: function (link) { //function to change image displayed on dashboard given a media link
        console.log('image changed from script');
        $('#sourceImage').attr('src', link);
    }
};

$(document).ready(function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    $('#sourceImage').on('load', function () {
        canvas.width = document.getElementById('sourceImage').width;
        canvas.height = document.getElementById('sourceImage').height;

        
        apply();
    });
});

function apply() {
    context.drawImage(document.getElementById('sourceImage'), 0, 0);
    console.log('testingggg');
}