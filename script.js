console.log("new script loaded");
$(document).ready(function () {
    $('#but').click(function () {
        console.log('clicked');
    })

    $('#image').click(function () {
        console.log('image clicked');
    })

    console.log(global.x);
})