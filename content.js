chrome.contextMenus.create({
    id: "downloadMenuItem",
    title: "Download This Page",
    contexts: ["all"], // This makes the menu item appear on all context menus
    onclick: function () {
        // Implement the download functionality here
        // For example, you can use the Chrome Downloads API to initiate the download
        chrome.downloads.download({
            url: window.location.href,
            filename: "downloaded_page.html"
        });
    }
});
