const timeElement = document.getElementById("time");
const time = new Date().toLocaleTimeString();

timeElement.textContent = `Time is ${time}`;

chrome.action.setBadgeText(
  {
    text: "Time",
  },
  () => {
    console.log("setBadgeText Finished!");
  }
);
