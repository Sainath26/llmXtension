chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "displayResponse") {
    const data = request.data;
    document.getElementById("response-container").innerHTML =
      JSON.stringify(data);
  }
});
