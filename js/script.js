let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
// document.querySelector("")

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

const linkIcons = document.querySelectorAll(".icons #link-icon");

linkIcons.forEach((icon) => {
    icon.addEventListener("click", function (event) {
        event.preventDefault();
        const link = this.getAttribute("href");
        navigator.clipboard.writeText(link).then(function () {
            alert("Link copied to clipboard!");
        });
    });
});




