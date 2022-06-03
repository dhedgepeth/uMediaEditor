/*Script running the sliders and reporting back to the HTML,
 * divied in sections by type of adjustment 
 */

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
