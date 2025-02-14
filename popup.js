document.getElementById("copy").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab?.id) return;

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: copySSHURL,
  });
});

function copySSHURL() {
  try {
    const repoNWO =
      "git@github.com:" +
      document.querySelector('meta[name="octolytics-dimension-repository_nwo"]')
        .content +
      ".git";

    navigator.clipboard.writeText(repoNWO).then(
      function () {
        console.log("Repository NWO successfully copied: " + repoNWO);
      },
      function (err) {
        console.error("Error in copying repository NWO: ", err);
      },
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
