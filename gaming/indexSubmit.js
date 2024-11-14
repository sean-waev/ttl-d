// const title = document.getElementById("title").value;
// const url = document.getElementById("url").value ;
// const body = document.getElementById("body").value;
// const user = get.localStorage(currentUser);
const API_URL = "https://gaming-news-api-1-b4245f6de242.herokuapp.com/items";

async function fetchData() {
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
  const body = document.getElementById("body").value;
  const username = localStorage.getItem("username-gaming");

  console.log("title:", title);
  console.log("url:", url);

  console.log("body:", body);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        url: url,
        points: 0,
        body: body || "",
        author: username,
        isFlagged: 0,
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
        console.log(data);
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
    console.log("from within:", data);
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function submitItem() {
  fetchData();
}
