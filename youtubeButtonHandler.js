function onYoutubeGoButtonClicked() {
    const urlElement = document.getElementById("youtube-url-input")
    const urlString = urlElement.value
    console.log("input text: ", urlString)

    const convertedUrlString = convertYoutubeUrl(urlString)
    console.log("url: ", convertedUrlString)

    const youtubeElement = document.getElementById("youtube-embed")
    youtubeElement.src = convertedUrlString
}

function convertYoutubeUrl(urlString) {
    var url = new URL(urlString)
    url.searchParams.append("contorls", "0")
    url.searchParams.append("autoplay", "1")
    url.searchParams.append("mute", "1")

    const videoId = url.searchParams.get("v")
    url.searchParams.delete("v")

    var pathList = url.pathname.split("/")
    const index = pathList.indexOf("watch")
    if (index >= 0) { pathList[index] = "embed"}
    pathList.push(videoId)
    url.pathname = pathList.join("/")
    
    return url.toString();
}