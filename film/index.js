const users = [
  {
    _id: "67126a83fae17be26091a245",
    title: "Documentary 2",
    url: "https://doc2.com/news/global-AI-adoption-nears-8-percent-milestone-by-2025",
    points: 8,
    author: "degen35",
    isFlagged: 0,
    createdAt: "2024-10-18T14:02:43.350Z",
    updatedAt: "2024-10-18T18:40:02.574Z",
    __v: 0,
  },

  {
    _id: "671268d840564b881e9ea588",
    title: "Documentary 1",
    url: "https://doc1.com/news/global-AI-adoption-nears-8-percent-milestone-by-2025",
    points: 0,
    timestamp: "600",
    author: "degen35",
    isFlagged: 0,
    createdAt: "2024-10-18T13:55:36.764Z",
    updatedAt: "2024-10-18T13:55:36.764Z",
    __v: 0,
  },
  {
    _id: "67128c704be3ad730532e230",
    title: "Documentary 3",
    url: "https://doc3.com/news/global-AI-adoption-nears-8-percent-milestone-by-2025",
    points: 0,
    author: "degen35",
    isFlagged: 0,
    createdAt: "2024-10-18T16:27:28.498Z",
    updatedAt: "2024-10-18T16:27:28.498Z",
    __v: 0,
  },
];
function stripToDomain(url) {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname;

  // Remove 'www.' if present
  const domain = hostname.replace(/^www\./, "");

  // Split by '.' and get the last two parts
  const parts = domain.split(".");
  const domainCom = parts.slice(-2).join(".");

  return domainCom;
}
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

// const response = await fetch("https://example.org/products.json").json();

// ex = getData();

const mappedUsers = users
  .map((user, index) => {
    return `<tr class="athing" >
                                <td align="right" valign="top" class="title"><span style="color: black;" class="rank">${
                                  index + 1
                                }.</span></td>
                               
                                <td class="title"><span style="color: black;" class="titleline" ><span style='font-size:11px; color: black;'><img
                                                    src="./Hacker News_files/tpp.png" height="18"
                                                    style="margin-right:8px;"></span><a style="color: black;"
                                            href="${user.url}">${
      user.title
    }</a><span
                                            class="sitebit comhead"> (<a style="color: black;"
                                                href="${
                                                  user.url
                                                }"><span style="color: black;"
                                                    class="sitestr">${stripToDomain(
                                                      user.url
                                                    )}</span></a>)</span></span>
                                </td>
                </tr>
                <br>
                <div style="height: 3px;"></div>
                <tr>
                    <td colspan="2">
                    <td class="subtext"><span class="subline" style="margin-left: 30px;
    font-size: 10px;">
                            <span class="score" id="score_40832214">${
                              user.points
                            } points</span> by <a 
                                class="hnuser">${user.author}</a>
                            <span class="age" title="2024-06-29T17:39:16"><a >${timeSince(
                              new Date(user.createdAt)
                            )}</a></span> <span id="unv_40832214"></span> 
                            | <a >${user.comments?.length | 0}&nbsp;comments</a>
                        </span>
                    </td>
                </tr>
                <br>
                <div style="height: 8px;"></div>
                `;
  })
  .join("");

document.getElementById("container").innerHTML = mappedUsers;