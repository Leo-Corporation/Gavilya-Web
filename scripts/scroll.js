window.onscroll = function () { handleScroll() };

function handleScroll() {
    if (window.scrollY != 0) {
        document.getElementById("header").classList.add("shadow");
    }
    else {
        document.getElementById("header").classList.remove("shadow");
    }
}