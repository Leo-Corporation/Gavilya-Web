async function getVersion(url) {
    let response = await fetch(vUrl);
    let data = await response.text();
    document.getElementById("downloadLink").innerHTML = "Download Gavilya <span class=\"font-normal hidden sm:inline-block\">(v" + data + ")</span>";
}

const vUrl = "https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Liens/Update%20System/Gavilya/Version.txt";
getVersion(vUrl);