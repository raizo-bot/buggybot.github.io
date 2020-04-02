var b = document.getElementById("buggy");
var c = document.getElementById("cursor");

function writeBuggy() {
    setTimeout( () => b.innerHTML = "B", 0);
    setTimeout( () => b.innerHTML = "Bu", 400);
    setTimeout( () => b.innerHTML = "Buu", 1000);
    setTimeout( () => b.innerHTML = "Bu", 1600);
    setTimeout( () => b.innerHTML = "Bug", 2500);
    setTimeout( () => b.innerHTML = "Bugg", 3000);
    setTimeout( () => b.innerHTML = "Buggg", 3600);
    setTimeout( () => b.innerHTML = "Bugg", 4100);
    setTimeout( () => b.innerHTML = "Buggy", 4700);
    setTimeout( () => b.innerHTML = "Bugg", 11000);
    setTimeout( () => b.innerHTML = "Bug", 11600);
    setTimeout( () => b.innerHTML = "Bu", 12000);
    setTimeout( () => b.innerHTML = "B", 12400);
    setTimeout( () => writeBuggy(), 12400);
}

function cursor() {
    setTimeout( () => c.innerHTML = "‎‎‎‎‎‎‏‏‎ ‎", 0);
    setTimeout( () => c.innerHTML = "|", 500);
    setTimeout( () => cursor(), 1000);
}

writeBuggy();
cursor();

