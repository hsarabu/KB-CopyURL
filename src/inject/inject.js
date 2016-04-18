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
var url, finalPage;

function changePage(){
	if(hasExternalPage() != -1){ //check to see if an external page exists
		finalPage = "http://kb.wisc.edu/page.php?id=" + getKbId(); //append the doc ID to the standard kb url Base

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

function getPage() {
	console.log(finalPage);
	return finalPage;
}
