

var init = true;

function updateIcon() {


chrome.tabs.query({
            'active': true,
            'windowId': chrome.windows.WINDOW_ID_CURRENT
        }, function (tabs) {

        	
        	if(/^http(.*)$/.test(tabs[0].url)) {

        	chrome.tabs.update(tabs[0].id, {url: 'http://webcache.googleusercontent.com/search?source=hp&q=cache:' + tabs[0].url});

         

            }
        });





	if(init){
		chrome.browserAction.setIcon({path:"icon1.png"});
	}else{
		chrome.browserAction.setIcon({path:"icon2.png"});
	}
	init = !init;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
