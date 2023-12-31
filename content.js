// content.js
document.addEventListener("keydown", function (e) {
  // Check for Option+Command+C (Alt+Meta+C) key combination
  if (e.altKey && e.metaKey && e.code === "KeyC") {
    copySSHURL();
  }
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
