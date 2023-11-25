// content.js
// content.js
document.addEventListener("keydown", function (e) {
  // Check for Option+Command+C (Alt+Meta+C) key combination
  if (e.altKey && e.metaKey && e.code === "KeyC") {
    copySSHURL();
  }
});

function copySSHURL() {
  try {
    // Find the meta tag containing the repository NWO and get its content
    const repoNWO =
      "github" +
      document.querySelector(
        'meta[name="octolytics-dimension-repository_network_root_nwo"]',
      ).content;

    // Copying to clipboard
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
