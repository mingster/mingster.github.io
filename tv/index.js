
function getFromAPI(url, callback) {
    var obj;
    fetch(url)
        .then(res => res.json())
        .then(data => obj = data)
        .then(() => callback(obj))
}

function SignIn(arrOfObjs) {
    var message = arrOfObjs.message;
    var sid = message + "";

    console.log(sid);

    if (sid != '')
        populateContent(sid);
}

function populateContent(sid) {
    //console.log("sid: " + sid);
    var url = "http://stbtest.5ik.tv/json/GetLiveScreen/?sid=" + sid;
    var chDiv = document.getElementById("channels");
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            //console.log("Checkout this JSON! ", data);
            for (const ch of data) {
                let div = document.createElement("div");
                div.className = "chLinkd glow-on-hover col-md-4";

                let contentId = document.createElement("span");
                contentId.className = "nowPlayingChNum";
                contentId.innerText = ch.contentId + " ";

                let link = document.createElement("a");
                link.addEventListener("click", function () { player.src({ src: ch.url, type: "application/x-mpegURL" }); player.play(); highlightChannelButton(this); });
                link.className = "nowPlayingChTitle";
                link.text = contentId.innerHTML + ch.title;

                div.appendChild(link);
                chDiv.appendChild(div);
                //console.log(div.innerHTML);
            }
        })
        .catch((err) => {
            throw err;
        });

    var player = videojs.players.mediaplayer;

}

function highlightChannelButton(selectedButton) {
    selectedButton.parentElement.className = 'chSelected glow-on-hover col-md-4';
}

document.getElementById("neededComponents").style.display = "none";

var player = videojs(
    "mediaplayer",
    {
        controlBar: {
            volumeMenuButton: {
                inline: false,
            },
        },
        registerPlugin: {
            responsiveLayout: {},
            persistvolume: {
                namespace: "twtv",
            },
        },
    },
    function () {
        var player = this;
        player.airPlay();
    }
);

player.responsiveLayout();
player.landscapeFullscreen();
player.on("play", function (e) { document.getElementById("neededComponents").style.display = "none"; }),
    player.on("error", function (e) {
        console.log(e);
        e.stopImmediatePropagation();
        var error = player.error();
        console.log("error!", error.code, error.type, error.message);
    });



var url_cti = "https://youtu.be/_QbRXRnHMVY";
var ctinews = document.querySelector(".ctinews");
ctinews.addEventListener("click", function () {
    player.src({ src: url_cti, type: "video/youtube" });
});

var url_daai = "https://youtu.be/oV_i3Hsl_zg";
var daai = document.querySelector(".daai");
daai.addEventListener("click", function () {
    player.src({ src: url_daai, type: "video/youtube" });
});

getFromAPI('http://stbtest.5ik.tv/json/signin/?username=mingster.tsai@gmail.com&passwd=crack123', SignIn);

