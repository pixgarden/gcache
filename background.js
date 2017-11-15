/*
var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "on.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"SCRIPT.cache.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {code:"alert()"});
  }
});

*/

// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*
var toggle = false;

function updateIcon() {


	if(toggle){
		chrome.browserAction.setIcon({path:"off.png"});
}else{

	chrome.browserAction.setIcon({path:"on.png"});
}

 toggle = !toogle;
}
chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
*/

var init = true;

function updateIcon() {

	if(init){
		chrome.browserAction.setIcon({path:"icon1.png"});
	}else{
		chrome.browserAction.setIcon({path:"icon2.png"});
	}
	init = !init;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
