chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener(() => {
  chrome.storage.local.get(["seconds"]).then((res) => {
    const seconds = res.seconds ?? 0;
    const now = new Date();

    chrome.storage.local.set({ seconds: seconds + 1 });

    chrome.action.setBadgeText({
      text: `${now.getHours() + ":" + now.getMinutes()}`,
    });
  });
});
