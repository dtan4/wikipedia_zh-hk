chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    var url = tab.url;

    if (info.status == "loading" && url.match(/https?:\/\/zh\.wikipedia\.org\/wiki\/.+/)) {
        var hk_url = url.replace(/(^https?:\/\/zh\.wikipedia\.org)\/wiki\/(.+)$/, "$1/zh-hk/$2");
        chrome.tabs.executeScript(tabId, {"code" : "window.location.href = '" + hk_url + "';"});
    }
});
