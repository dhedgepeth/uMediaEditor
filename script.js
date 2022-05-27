console.log("new script loaded");

var jquery = {
    getLink: function (link) { //function to change image displayed on dashboard given a media link
        console.log('image changed from script')
        $('#image').attr('src', link);
    }
};

$(document).ready(function () {
    $('#image').click(function () {
        console.log('image clicked');
    })
});