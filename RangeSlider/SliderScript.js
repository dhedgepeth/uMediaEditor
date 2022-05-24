var slider = document.getElementById("SliderRange");
var output = document.getElementById("ValueID");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML =  this.value;
}
