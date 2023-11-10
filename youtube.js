
function onYoutubeGoButtonClicked() {
    const urlElement = document.getElementById("youtube-url-input")
    const urlString = urlElement.value

    redirectWithYoutubeQuery(urlString)
}

function createEmbedYoutubeUrl(videoId) {
    var url = new URL("https://youtube.com/embed/")
    url.searchParams.append("contorls", "0")
    url.searchParams.append("autoplay", "1")
    url.searchParams.append("mute", "1")

    var pathList = url.pathname.split("/")
    pathList.push(videoId)
    url.pathname = pathList.join("/")

    return url.toString();
}

function embedYoutubeUrl(embedYoutubeUrlString) {
    const youtubeElement = document.getElementById("youtube-embed")
    youtubeElement.src = embedYoutubeUrlString
}

function redirectWithYoutubeQuery(youtubeUrl) {
    var url = new URL(youtubeUrl)
    const videoId = url.searchParams.get("v")

    let currentUrl = new URL(window.location.href);

    currentUrl.searchParams.set("v", videoId)

    console.log("redirect to:", currentUrl.toString())
    /* rediect */
    location.href = currentUrl.toString()
}