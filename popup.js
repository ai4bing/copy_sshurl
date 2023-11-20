// popup.js
document.getElementById('copyButton').addEventListener('click', function() {
  // Send a message to the content script
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: copySSHUrl
    });
  });
});

// This function should match the function in your content script that copies the SSH URL
function copySSHUrl() {
  // Here, you would invoke the same SSH URL copying logic that's in your content script.
  // Since this is running in the context of the current tab, it has access to the same
  // DOM elements as a content script would.
  try {
    const sshUrl = document.querySelectorAll('[data-target="get-repo.modal"] tab-container input.form-control.input-monospace')[1].value;
    navigator.clipboard.writeText(sshUrl);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
