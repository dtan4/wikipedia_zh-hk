chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    var url = tab.url;

    if (url.match(/https?:\/\/zh\.wikipedia\.org\/wiki\/.+/)) {
        var hk_url = url.replace(/(^https?:\/\/zh\.wikipedia\.org)\/wiki\/(.+)$/, "$1/zh-hk/$2");
        chrome.tabs.update(tabId, {"url" : hk_url}, function(tab) {
            console.log("redirected to " + hk_url);
        });
    }
});
