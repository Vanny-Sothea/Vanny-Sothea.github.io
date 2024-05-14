// Dark mode

const toggle = document.getElementById("toggle");
const imageToChange = document.getElementById("imageToChange");
const logoToChange = document.getElementById("logoToChange");
const theme = window.localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
    logoToChange.src = "/Thea_Photos/t-white.png"
}
// Check the theme stored in localStorage and apply it to the body
toggle.addEventListener("click", () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle("dark-mode");
    // Store the current theme in localStorage
    if (document.body.classList.contains("dark-mode")) {
        window.localStorage.setItem("theme", "dark");
        logoToChange.src = "/Thea_Photos/t-white.png"
    } else {
        window.localStorage.setItem("theme", "light");
        logoToChange.src = "/Thea_Photos/t-black.png"
    }
});