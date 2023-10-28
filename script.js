document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("report-problem-link")
    .addEventListener("click", function () {
      let problemMessage = prompt("Please describe the problem:");
      if (problemMessage !== null && problemMessage.trim() !== "") {
        console.log("Problem Message:", problemMessage);
      }
    });
});
