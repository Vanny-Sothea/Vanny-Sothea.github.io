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



// When user click on yes
const gif = document.getElementById("gif");
const title = document.getElementById("title");
const no = document.getElementById("no");
const yes = document.getElementById("yes");



function yesOnClick(){
    gif.src = "bear-hug.gif";
    gif.style.width = "350px"
    title.innerHTML = "Ily babe 🥹"
}


// When user click on no
const text = [
    "Are you sure?",
    "Are you sure? (2)",
    "No please",
    "I'll be sad if you do that",
    "Aight, I understand",
    "Aint no way you do this",
    "Alright fine!",
    "NO (end here 😭)",
    "Nahh, just kidding",
    "Yes"
];


let yesSize = 3.2;
let noSize = 3.2;
let x = 0;
function noOnClick() {
    if (x < text.length) {
        no.innerHTML = text[x];
        x++;
        yesSize += 1.6;
        noSize -= .4;
    }
    else {
        yesOnClick();
    }


    if (x == text.length) {
        no.classList.add("yes");
    }

    if (noSize = 0.4) {
        noSize = 1.6;
    }

    yes.style.fontSize = `${yesSize}vw`;
    no.style.fontSize = `${noSize}vw`;
}
