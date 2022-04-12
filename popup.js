const timeElement = document.getElementById("time");
const time = new Date().toLocaleTimeString();
const nameElement = document.getElementById("name");

timeElement.textContent = `Time is ${time}`;

chrome.action.setBadgeText(
  {
    text: "Time",
  },
  () => {
    console.log("setBadgeText Finished!");
  }
);

chrome.storage.sync.get(["name"]).then((res) => {
  nameElement.textContent = `Your name is: ${res.name}` ?? "???";
});
