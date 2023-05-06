document.getElementById("fillFormButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      const port = chrome.tabs.connect(tabId);
      port.postMessage({ action: "fillForm" });
    });
  });
  
  
  
  