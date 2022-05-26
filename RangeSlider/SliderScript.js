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

