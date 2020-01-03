window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    document.querySelector("#menuknap_container").addEventListener("click", clickMenu);
}


function clickMenu() {
    console.log("clickMenu");
    document.querySelector("#menuikon").classList.toggle("hidden");

    if (document.querySelector("#menuknap_container").classList.contains("open")) {
        document.querySelector("#menuknap_container").classList = "closed";
    } else {
        document.querySelector("#menuknap_container").classList = "open";
    }
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector("#menuikon").classList.remove("hidden");

        document.querySelector("menu_background").classList.remove("menu_background");
    } //else {
    // document.body.style.backgroundColor = "pink";}
}

const init = function () {
    let items = document.querySelectorAll('section');
    for (let i = 0; i < items.length; i++) {
        items[i].style.background = randomColor({
            luminosity: 'light'
        });
    }
    cssScrollSnapPolyfill()
}
init();
