chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendToGenerator",
    title: "Generate Cover Letter from Selection",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sendToGenerator") {
    // Store the selected text
    chrome.storage.local.set({ 
      jobDescription: info.selectionText,
      timestamp: Date.now()
    }, () => {
      // Open the popup
      chrome.action.openPopup();
    });
  }
});
