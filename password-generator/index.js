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


//Password generator

function pwgenerator() {
    const inputLength = document.querySelector("#lengthOfPass");
    const inputRows = document.querySelector("#rowOfPass");

    const length = inputLength.value === "" ? getRandomLength() : Number(inputLength.value);
    const rows = inputRows.value === "" ? 1 : Number(inputRows.value);

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+";
    let passwords = [];

    for (let j = 0; j < rows; j++) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }
        passwords.push(password);
    }

    inputLength.value = "";
    inputRows.value = "";
    const passwordElement = document.querySelector("#password");
    passwordElement.innerText = passwords.join('\n');

    return passwords;
}

function getRandomLength() {
    return Math.floor(Math.random() * 10) + 8; // Adjust the range as needed
}


function getRandomLength() {
    return Math.floor(Math.random() * 10) + 8; // Adjust the range as needed
}

function enter() {
    if (event.key === "Enter") {
        pwgenerator();
    }
}

