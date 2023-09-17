document.addEventListener('DOMContentLoaded', function () {
    // Get the current tab's URL using the chrome.tabs API
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentUrl = tabs[0].url;
        const currentUrlElement = document.getElementById('currentUrl');

        if (currentUrlElement) {
            currentUrlElement.textContent = currentUrl;
            currentUrlElement.href = currentUrl; // Make it a clickable link
        }
    });
});
