document.getElementById("scanBtn").addEventListener("click", function () {
    const resultsDiv = document.getElementById("results");
    const statusText = document.getElementById("status");

    resultsDiv.classList.remove("hidden");
    statusText.innerHTML = `<span class="spinner"></span> Running scan...`;

    setTimeout(() => {
        const resultMessage = "No critical issues found. PC is healthy!";
        statusText.innerHTML = resultMessage;

        // Add to history
        const historyList = document.getElementById("history");
        const timestamp = new Date().toLocaleString();
        const historyItem = document.createElement("li");
        historyItem.textContent = `${timestamp} - ${resultMessage}`;
        historyList.appendChild(historyItem);
    }, 3000); // Simulate scan time
});
