var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
var div7 = document.getElementById("div7");
var div8 = document.getElementById("div8");
var div9 = document.getElementById("div9");

function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}

function isVisible (ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return (
      (top > 0 || bottom > 0) &&
      top < vHeight
    );
  }

function addAnimation() {
  if (isMobile()) {
    return;
  }
  else if (!isMobile()) {
    if(isVisible(div2)) {div2.classList.add("fadeInRightBig");}
    if(isVisible(div3)) {div3.classList.add("fadeInLeftBig");}
    if(isVisible(div4)) {div4.classList.add("fadeInRightBig");}
    if(isVisible(div5)) {div5.classList.add("fadeInLeftBig");}
    if(isVisible(div6)) {div6.classList.add("fadeInRightBig");}
    if(isVisible(div7)) {div7.classList.add("fadeInRightBig");}
    if(isVisible(div8)) {div8.classList.add("fadeInRightBig");}
    if(isVisible(div9)) {div9.classList.add("fadeInRightBig");}
  }
}

