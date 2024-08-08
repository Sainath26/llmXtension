chrome.contextMenus.create({
  id: "llmXP",
  title: "Get it explained by an LLM",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "llmXP") {
    const Text = info.selectionText;
    console.log(typeof Text);
    sendMessageToServer(Text);
    const popupUrl = chrome.runtime.getURL("popup/popup.html");
    const windowInfo = {
      url: popupUrl,
      type: "popup",
      width: 500,
      height: 500,
    };
    chrome.windows.create(windowInfo);
  }
});

async function sendMessageToServer(Text) {
  const url = `http://localhost:3000/llmx`;
  const Data = {
    key: Text,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData.message);
    chrome.runtime.sendMessage({
      action: "displayResponse",
      data: responseData.message,
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
