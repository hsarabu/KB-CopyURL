chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		changePage();
		// ----------------------------------------------------------

	}
	}, 10);
});
var url;

function changePage(){
	if(hasExternalPage() != -1){ //check to see if an external page exists
		var finalPage = "http://kb.wisc.edu/page.php?id=" + getKbId(); //append the doc ID to the standard kb url Base
		var element = document.createElement("P");
		var text = document.createTextNode("An external site exists, click anywhere in the banner to copy me onto the clipboard" + finalPage);
		element.appendChild(text);
		document.getElementById("logo-search").appendChild(element);
	}
};


function getKbId() {
	url = window.location + ""; //grab current URL to get the KB doc number
	var tempList = url.split("=");
	return tempList[1];

};

function hasExternalPage(){

	var HTML = document.getElementsByTagName('html')[0].innerHTML;
	return HTML.search("-external");
	};

