function getBrowserInfo() {
    const browserInfo = `${navigator.appName} ${navigator.appVersion}`;
    document.getElementById("browserInfo").innerText = browserInfo;
}

function getScreenDetails() {
    const screenDetails = `Width: ${screen.width}, Height: ${screen.height}, Color Depth: ${screen.colorDepth}`;
    document.getElementById("screenDetails").innerText = screenDetails;
}

function getHistoryStackLength() {
    const historyStackLength = history.length;
    document.getElementById("historyStack").innerText = historyStackLength;
}

function getParagraphCount() {
    const paragraphs = document.getElementsByTagName("p").length;
    document.getElementById("paragraphCount").innerText = paragraphs;
}

function replaceParagraphText() {
    const paragraph = document.getElementById("replaceText");
    paragraph.innerText = "The text has been successfully replaced!";
}

getBrowserInfo();
getScreenDetails();
getHistoryStackLength();
getParagraphCount();
