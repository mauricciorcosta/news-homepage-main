window.addEventListener("resize", function() {
    if (this.window.matchMedia("(min-width: 992px)").matches) {
        setTimeout(function() {this.window.location.reload()}, 100);
    }
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.querySelector(".overlay").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".overlay").style.width = "0";
}

