// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        changePage();
    }
});

function changePage(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        url = tabs[0].url;
    });
    if(hasExternalPage()){
        finalPage = "http://kb.wisc.edu/page.php?id=" + getKbId();
        element = document.createElement("P");
        text = document.createTextNode("An external site exists, click anywhere in the banner to copy me onto the clipboard" + finalPage);
        element.appendChild(text);
        document.getElementById("logo-search").appendChild(element);
    }
};


function getKbId() {
    var tempList = url.split("=");
    return tempList[1];

};

function hasExternalPage(){
        //var feedback = Document.getElementsByClassName("kbfeedbackt;
        //alert(feedback);

        alert(document.body.innerText.indexOf("Remove"));
        //alert(document.innerText.indexOf("-external"));
        return window.find("-external");
};



