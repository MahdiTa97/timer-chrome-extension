const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");

const timeUpdater = () => {
  chrome.storage.local.get(["seconds"]).then(() => {
    const currentTime = new Date().toLocaleTimeString();
    timeElement.textContent = `Time is ${currentTime}`;
  });
};

timeUpdater();

setInterval(() => {
  timeUpdater();
}, 1000);

chrome.storage.sync.get(["name"]).then((res) => {
  nameElement.textContent = `Your name is: ${res.name ?? "???"}`;
});
