// content.js
document.addEventListener("keydown", function (e) {
  // Check for Option+Command+C (Alt+Meta+C) key combination
  if (e.altKey && e.metaKey && e.code === "KeyC") {
    copySSHUrl();
  }
});

function copySSHUrl() {
  try {
    const sshUrl = document.querySelectorAll(
      '[data-target="get-repo.modal"] tab-container input.form-control.input-monospace',
    )[1].value;

    // Copying to clipboard in Manifest V3
    navigator.clipboard.writeText(sshUrl).then(
      function () {
        console.log("SSH URL successfully copied");
      },
      function (err) {
        console.error("Error in copying SSH URL: ", err);
      },
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
