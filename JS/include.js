// include.js
function includeHTML() {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    var navbar = document.getElementById("navbar");

    if (header) {
        fetch("/Pages/header.html")
            .then(response => response.text())
            .then(data => {
                header.innerHTML = data;
            });
    }

    if (navbar) {
        fetch("/Pages/navbar.html")
            .then(response => response.text())
            .then(data => {
                navbar.innerHTML = data;
            });
    }

    if (footer) {
        fetch("/Pages/footer.html")
            .then(response => response.text())
            .then(data => {
                footer.innerHTML = data;
            });
    }
}

document.addEventListener("DOMContentLoaded", includeHTML);
