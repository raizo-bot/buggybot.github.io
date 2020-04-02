document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() { 
var alpha = Math.min(0.1 * $(this).scrollTop() / 1000, 0.5);
var channel = Math.round(alpha * 80);
var red = 5 + channel;
var green = channel;
var blue = 15 + channel;
document.body.style.background = "rgb(" + red + "," + green + ","+ blue + ")"; 
document.getElementById("html").style.background = "rgb(" + red + "," + green + "," + blue + ")"; 
document.getElementById("logo").style.background = "rgb(" + red + "," + green + "," + blue + ")";
document.getElementById("biscuits").style.background = "rgb(" + red + "," + green + "," + blue + ")";
});
});