// Get the element by its id
var timeElement = document.querySelector("span");

// Update the element's content with the current date and time
function updateTime() {
  var now = new Date();
  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  timeElement.textContent = now.toLocaleString("en-US", options);
}

// Call the updateTime function once and then every second
updateTime();
setInterval(updateTime, 1000);

document.getElementById("fileInput").addEventListener("change", function () {
  const selectedFile = this.files[0];
  console.log("Selected file:", selectedFile.name);
  // Perform further actions with the selected file
});
