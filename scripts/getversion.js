function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    console.log("HTTP Result:\n\n" + xmlHttp.responseText);
    return xmlHttp.responseText;
}

const vUrl = "https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Liens/Update%20System/Gavilya/Version.txt";

var response = httpGet(vUrl);
document.getElementById("downloadLink").innerHTML = "Download Gavilya <span class=\"font-normal hidden sm:inline-block\">(v" + response + ")</span>";