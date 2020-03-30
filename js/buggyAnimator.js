var b = document.getElementById("buggy");
var c = document.getElementById("cursor");

function writeBuggy() {
    setTimeout( () => b.innerHTML = "B", 0);
    setTimeout( () => b.innerHTML = "Bu", 400);
    setTimeout( () => b.innerHTML = "Buu", 800);
    setTimeout( () => b.innerHTML = "Bu", 1600);
    setTimeout( () => b.innerHTML = "Bug", 2200);
    setTimeout( () => b.innerHTML = "Bugg", 2600);
    setTimeout( () => b.innerHTML = "Buggg", 3000);
    setTimeout( () => b.innerHTML = "Bugg", 3800);
    setTimeout( () => b.innerHTML = "Buggy", 4400);
    setTimeout( () => b.innerHTML = "Bugg", 7000);
    setTimeout( () => b.innerHTML = "Bug", 7600);
    setTimeout( () => b.innerHTML = "Bu", 8000);
    setTimeout( () => b.innerHTML = "B", 8400);
    setTimeout( () => writeBuggy(), 8400);
};

function cursor() {
    setTimeout( () => c.innerHTML = "", 0);
    setTimeout( () => c.innerHTML = "|", 500);
    setTimeout( () => cursor(), 1000);
}

writeBuggy();
cursor();

