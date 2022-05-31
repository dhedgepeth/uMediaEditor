/*Script running the sliders and reporting back to the HTML,
 * divied in sections by type of adjustment 
 */

//-------------------------------Color Adust Script----------------------------//
var hueSlider = document.getElementById("hueRange");
var hueOutput = document.getElementById("hueValue");

hueOutput.innerHTML = hueSlider.value;

hueSlider.oninput = function () {
    hueOutput.innerHTML =  this.value;
}

var tintSlider = document.getElementById("tintRange");
var tintOutput = document.getElementById("tintValue");

tintOutput.innerHTML = tintSlider.value;

tintSlider.oninput = function () {
    tintOutput.innerHTML = this.value;
}

var tempSlider = document.getElementById("tempRange");
var tempOutput = document.getElementById("tempValue");

tempOutput.innerHTML = tempSlider.value;

tempSlider.oninput = function () {
    tempOutput.innerHTML = this.value;
}

var satSlider = document.getElementById("satRange");
var satOutput = document.getElementById("satValue");

satOutput.innerHTML = satSlider.value;

satSlider.oninput = function () {
    satOutput.innerHTML = this.value;
}

var vibSlider = document.getElementById("vibRange");
var vibOutput = document.getElementById("vibValue");

vibOutput.innerHTML = vibSlider.value;

vibSlider.oninput = function () {
    vibOutput.innerHTML = this.value;
}

//------------------------------------Detail Adjust Script-------------------------------//
var sharpSlider = document.getElementById("sharpRange");
var sharpOutput = document.getElementById("sharpValue");

sharpOutput.innerHTML = sharpSlider.value;

sharpSlider.oninput = function () {
    sharpOutput.innerHTML = this.value;
}

var blurSlider = document.getElementById("blurRange");
var blurOutput = document.getElementById("blurValue");

blurOutput.innerHTML = blurSlider.value;

blurSlider.oninput = function () {
    blurOutput.innerHTML = this.value;
}

//-------------------------------------Light Adjust Script------------------------------//
var brightSlider = document.getElementById("brightRange");
var brightOutput = document.getElementById("brightValue");

brightOutput.innerHTML = brightSlider.value;

brightSlider.oninput = function () {
    brightOutput.innerHTML = this.value;
}

var shadowSlider = document.getElementById("shadowRange");
var shadowOutput = document.getElementById("shadowValue");

shadowOutput.innerHTML = shadowSlider.value;

shadowSlider.oninput = function () {
    shadowOutput.innerHTML = this.value;
}

var contrastSlider = document.getElementById("contrastRange");
var contrastOutput = document.getElementById("contrastValue");

contrastOutput.innerHTML = contrastSlider.value;

contrastSlider.oninput = function () {
    contrastOutput.innerHTML = this.value;
}

var exposureSlider = document.getElementById("exposureRange");
var exposureOutput = document.getElementById("exposureValue");

exposureOutput.innerHTML = exposureSlider.value;

exposureSlider.oninput = function () {
    exposureOutput.innerHTML = this.value;
}

var blackSlider = document.getElementById("blackRange");
var blackOutput = document.getElementById("blackValue");

blackOutput.innerHTML = blackSlider.value;

blackSlider.oninput = function () {
    blackOutput.innerHTML = this.value;
}

var whiteSlider = document.getElementById("whiteRange");
var whiteOutput = document.getElementById("whiteValue");

whiteOutput.innerHTML = whiteSlider.value;

whiteSlider.oninput = function () {
    whiteOutput.innerHTML = this.value;
}

var highlightsSlider = document.getElementById("highlightsRange");
var highlightsOutput = document.getElementById("highlightsValue");

highlightsOutput.innerHTML = highlightsSlider.value;

highlightsSlider.oninput = function () {
    highlightsOutput.innerHTML = this.value;
}