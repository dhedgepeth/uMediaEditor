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

