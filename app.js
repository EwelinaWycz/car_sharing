const header = document.querySelector("header");
console.log(header)

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        header.classList.add("header--sticky");
    } else {
        header.classList.remove("header--sticky");
    }
})