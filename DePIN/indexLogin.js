// const title = document.getElementById("title").value;
// const url = document.getElementById("url").value ;
// const body = document.getElementById("body").value;
// const user = get.localStorage(currentUser);
const LOGIN_API_URL =
  "https://depin-api-1-50bbaf3a3e32.herokuapp.com/auth/login";

// import 'https://tomashubelbauer.github.io/github-pages-local-storage/index.js';

async function fetchData(
  login_username = document.getElementById("username-depin").value,
  login_password = document.getElementById("password").value
) {
  // const login_password = document.getElementById("password").value;
  // const body = document.getElementById("body").value;


  try {
    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login_username,
        password: login_password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response data
        localStorage.setItem("username-depin", data.username);
        localStorage.setItem("accesstoken", data.accesstoken);
        window.location.href = "./index.html";
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });

    console.log(response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function submitLogin() {
  fetchData();
}

// const title = document.getElementById("title").value;
// const url = document.getElementById("url").value ;
// const body = document.getElementById("body").value;
// const user = get.localStorage(currentUser);
const REGISTER_API_URL =
  "https://depin-api-1-50bbaf3a3e32.herokuapp.com/auth/register";

async function fetchRegister() {
  const REGISTER_username = document.getElementById("reg_username").value;
  const REGISTER_password = document.getElementById("reg_password").value;


  try {
    const response = await fetch(REGISTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: REGISTER_username,
        password: REGISTER_password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response data
        fetchData(REGISTER_username, REGISTER_password);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });

    console.log(response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function submitRegister() {
  fetchRegister();
}
