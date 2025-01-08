document.getElementById("scanBtn").addEventListener("click", function () {
    const resultsDiv = document.getElementById("results");
    const statusText = document.getElementById("status");

    resultsDiv.classList.remove("hidden");
    statusText.textContent = "Running scan...";

    setTimeout(() => {
        statusText.textContent = "No critical issues found. PC is healthy!";
    }, 2000); // Simulate scan time
});
