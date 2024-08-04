chrome.contextMenus.create({
  id: "llmXP",
  title: "Get it explained by an LLM",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "llmXP") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        navigator.clipboard.writeText(window.getSelection().toString());
      },
    });
    const popupUrl = chrome.runtime.getURL("popup/popup.html");
    const tabId = tab.id;
    const windowInfo = {
      url: popupUrl,
      type: "popup",
      width: 500,
      height: 500,
    };
    chrome.windows.create(windowInfo);
  }
});
