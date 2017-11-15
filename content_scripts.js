var fn = function(){...};
chrome.runtime.sendMessage({type: "status"}, function(response) {
    if(response.status == 1) fn();
    return;
});