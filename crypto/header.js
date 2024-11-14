const username = localStorage.getItem("username");
let header = (username === "null" || username === null)? "" : `${username} |`
let button = (username === "null" || username === null) ? "login" : "Logout";
document.getElementById("log").innerText = header;
document.getElementById("loginButton").innerText = button;

  // Add event listener for the change email button
const changeButtonEvent = document.getElementById("log");
changeButtonEvent.addEventListener("click", () => {
window.location.href = "./profile.html";
});

function clickLog() {

    if (username !== "null") {
        localStorage.setItem("username", null);
        localStorage.setItem("accesstoken", null);
        localStorage.setItem("pageNumber", 0);
        window.location.href = "./index.html";
    } else {
        window.location.href = "./login.html";
    }
}

function clickSubmit() {

    if (username !== "null") {
        window.location.href = "./submit.html";
    } else {
        window.location.href = "./login.html";
    }
}
