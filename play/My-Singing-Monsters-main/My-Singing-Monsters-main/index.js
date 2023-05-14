$("#monsters").fadeOut(0);

$("#name-button").click(function () {
    displayName();
});

$("body").keydown(function (event) {
    if (event.key === "Enter") {
        displayName();
    }
});


function displayName() {
    $("#name-button").fadeOut();
    $("#input-name").fadeOut();
    const name = $("#input-name").val();
    $(".name").text("Welcome " + name + " click a monster to make sounds.");
    $("#monsters").fadeIn();
    $("#mystery-monsters").fadeOut(0);
    openingMusic.pause();
}

const audioMammott = new Audio("sounds/mammott.mp3");
const audioKayna = new Audio("sounds/kayna.mp3");
const audioClamble = new Audio("sounds/clamble.mp3");
const audioDrumpler = new Audio("sounds/drumpler.mp3");
const audioFurcorn = new Audio("sounds/furcorn.mp3");
const audioNoggin = new Audio("sounds/noggin.mp3");
const audioParlsona = new Audio("sounds/parlsona.mp3");
const audioQuibble = new Audio("sounds/quibble.mp3");
const audioRareJammer = new Audio("sounds/rare-jammer.mp3");
const audioShrubb = new Audio("sounds/shrubb.mp3");
const audioTawkerr = new Audio("sounds/tawkerr.mp3");
const audioTweedle = new Audio("sounds/tweedle.mp3");


const audioPotbelly = new Audio("sounds/potbelly.mp3")
const audioMaw = new Audio("sounds/maw.mp3")
const audioStoowarb = new Audio("sounds/stoowarb.mp3")
const audioStogg = new Audio("sounds/stogg.mp3")
const audioBowhead= new Audio("sounds/bowhead.mp3")
const audioWubbox = new Audio("sounds/Wubbox.mp3")
const audioRareWubbox = new Audio("sounds/Rare-Wubbox.mp3")
const audioHoola = new Audio("sounds/hoola.mp3")
const audioPompom = new Audio("sounds/pompom.mp3")
const audioScups = new Audio("sounds/scups.mp3")
const audioQuarrister = new Audio("sounds/quarrister.mp3")
const audioEpicWubbox = new Audio("sounds/epic-wubbox.mp3")

const openingMusic = new Audio("sounds/opening-music.mp3");

openingMusic.play();


$(".mammott").click(function () {

    const isPlaying = function () {
        return audioMammott
            && audioMammott.currentTime > 0
            && !audioMammott.paused
            && !audioMammott.ended
            && audioMammott.readyState > 2;
    }

    if (isPlaying()) {
        audioMammott.pause();
        audioMammott.currentTime = 0;
        $(".mammott").removeClass("monster-background-color");
    } else {
        audioMammott.play();
        $(".mammott").addClass("monster-background-color");
    }
});


$(".kayna").click(function () {

    const isPlaying = function () {
        return audioKayna
            && audioKayna.currentTime > 0
            && !audioKayna.paused
            && !audioKayna.ended
            && audioKayna.readyState > 2;
    }

    if (isPlaying()) {
        audioKayna.pause();
        audioKayna.currentTime = 0;
        $(".kayna").removeClass("monster-background-color");
    } else {
        audioKayna.play();
        $(".kayna").addClass("monster-background-color");
    }
});

$(".clamble").click(function () {

    const isPlaying = function () {
        return audioClamble
            && audioClamble.currentTime > 0
            && !audioClamble.paused
            && !audioClamble.ended
            && audioClamble.readyState > 2;
    }

    if (isPlaying()) {
        audioClamble.pause();
        audioClamble.currentTime = 0;
        $(".clamble").removeClass("monster-background-color");
    } else {
        audioClamble.play();
        $(".clamble").addClass("monster-background-color");
    }

});

$(".drumpler").click(function () {

    const isPlaying = function () {
        return audioDrumpler
            && audioDrumpler.currentTime > 0
            && !audioDrumpler.paused
            && !audioDrumpler.ended
            && audioDrumpler.readyState > 2;
    }

    if (isPlaying()) {
        audioDrumpler.pause();
        audioDrumpler.currentTime = 0;
        $(".drumpler").removeClass("monster-background-color");
    } else {
        audioDrumpler.play();
        $(".drumpler").addClass("monster-background-color");
    }
});

$(".furcorn").click(function () {

    const isPlaying = function () {
        return audioFurcorn
            && audioFurcorn.currentTime > 0
            && !audioFurcorn.paused
            && !audioFurcorn.ended
            && audioFurcorn.readyState > 2;
    }

    if (isPlaying()) {
        audioFurcorn.pause();
        audioFurcorn.currentTime = 0;
        $(".furcorn").removeClass("monster-background-color");
    } else {
        audioFurcorn.play();
        $(".furcorn").addClass("monster-background-color");
    }
});

$(".noggin").click(function () {

    const isPlaying = function () {
        return audioNoggin
            && audioNoggin.currentTime > 0
            && !audioNoggin.paused
            && !audioNoggin.ended
            && audioNoggin.readyState > 2;
    }

    if (isPlaying()) {
        audioNoggin.pause();
        audioNoggin.currentTime = 0;
        $(".noggin").removeClass("monster-background-color");
    } else {
        audioNoggin.play();
        $(".noggin").addClass("monster-background-color");
    }
});

$(".parlsona").click(function () {

    const isPlaying = function () {
        return audioParlsona
            && audioParlsona.currentTime > 0
            && !audioParlsona.paused
            && !audioParlsona.ended
            && audioParlsona.readyState > 2;
    }

    if (isPlaying()) {
        audioParlsona.pause();
        audioParlsona.currentTime = 0;
        $(".parlsona").removeClass("monster-background-color");
    } else {
        audioParlsona.play();
        $(".parlsona").addClass("monster-background-color");
    }
});

$(".quibble").click(function () {

    const isPlaying = function () {
        return audioQuibble
            && audioQuibble.currentTime > 0
            && !audioQuibble.paused
            && !audioQuibble.ended
            && audioQuibble.readyState > 2;
    }

    if (isPlaying()) {
        audioQuibble.pause();
        audioQuibble.currentTime = 0;
        $(".quibble").removeClass("monster-background-color");
    } else {
        audioQuibble.play();
        $(".quibble").addClass("monster-background-color");
    }
});

$(".rare-jammer").click(function () {

    const isPlaying = function () {
        return audioRareJammer
            && audioRareJammer.currentTime > 0
            && !audioRareJammer.paused
            && !audioRareJammer.ended
            && audioRareJammer.readyState > 2;
    }

    if (isPlaying()) {
        audioRareJammer.pause();
        audioRareJammer.currentTime = 0;
        $(".rare-jammer").removeClass("monster-background-color");
    } else {
        audioRareJammer.play();
        $(".rare-jammer").addClass("monster-background-color");
    }
});

$(".shrubb").click(function () {

    const isPlaying = function () {
        return audioShrubb
            && audioShrubb.currentTime > 0
            && !audioShrubb.paused
            && !audioShrubb.ended
            && audioShrubb.readyState > 2;
    }

    if (isPlaying()) {
        audioShrubb.pause();
        audioShrubb.currentTime = 0;
        $(".shrubb").removeClass("monster-background-color");
    } else {
        audioShrubb.play();
        $(".shrubb").addClass("monster-background-color");
    }
});

$(".tawkerr").click(function () {

    const isPlaying = function () {
        return audioTawkerr
            && audioTawkerr.currentTime > 0
            && !audioTawkerr.paused
            && !audioTawkerr.ended
            && audioTawkerr.readyState > 2;
    }

    if (isPlaying()) {
        audioTawkerr.pause();
        audioTawkerr.currentTime = 0;
        $(".tawkerr").removeClass("monster-background-color");
    } else {
        audioTawkerr.play();
        $(".tawkerr").addClass("monster-background-color");
    }
});

$(".tweedle").click(function () {

    const isPlaying = function () {
        return audioTweedle
            && audioTweedle.currentTime > 0
            && !audioTweedle.paused
            && !audioTweedle.ended
            && audioTweedle.readyState > 2;
    }

    if (isPlaying()) {
        audioTweedle.pause();
        audioTweedle.currentTime = 0;
        $(".tweedle").removeClass("monster-background-color");
    } else {
        audioTweedle.play();
        $(".tweedle").addClass("monster-background-color");
    }
});


$(".potbelly").click(function () {

    const isPlaying = function () {
        return audioPotbelly
            && audioPotbelly.currentTime > 0
            && !audioPotbelly.paused
            && !audioPotbelly.ended
            && audioPotbelly.readyState > 2;
    }

    if (isPlaying()) {
        audioPotbelly.pause();
        audioPotbelly.currentTime = 0;
        $(".potbelly").removeClass("monster-background-color");
    } else {
        audioPotbelly.play();
        $(".potbelly").addClass("monster-background-color");
    }
});

$(".maw").click(function () {

    const isPlaying = function () {
        return audioMaw
            && audioMaw.currentTime > 0
            && !audioMaw.paused
            && !audioMaw.ended
            && audioMaw.readyState > 2;
    }

    if (isPlaying()) {
        audioMaw.pause();
        audioMaw.currentTime = 0;
        $(".maw").removeClass("monster-background-color");
    } else {
        audioMaw.play();
        $(".maw").addClass("monster-background-color");
    }
});

$(".stoowarb").click(function () {

    const isPlaying = function () {
        return audioStoowarb
            && audioStoowarb.currentTime > 0
            && !audioStoowarb.paused
            && !audioStoowarb.ended
            && audioStoowarb.readyState > 2;
    }

    if (isPlaying()) {
        audioStoowarb.pause();
        audioStoowarb.currentTime = 0;
        $(".stoowarb").removeClass("monster-background-color");
    } else {
        audioStoowarb.play();
        $(".stoowarb").addClass("monster-background-color");
    }
});


$(".stogg").click(function () {

    const isPlaying = function () {
        return audioStogg
            && audioStogg.currentTime > 0
            && !audioStogg.paused
            && !audioStogg.ended
            && audioStogg.readyState > 2;
    }

    if (isPlaying()) {
        audioStogg.pause();
        audioStogg.currentTime = 0;
        $(".stogg").removeClass("monster-background-color");
    } else {
        audioStogg.play();
        $(".stogg").addClass("monster-background-color");
    }
});


$(".bowhead").click(function () {

    const isPlaying = function () {
        return audioBowhead
            && audioBowhead.currentTime > 0
            && !audioBowhead.paused
            && !audioBowhead.ended
            && audioBowhead.readyState > 2;
    }

    if (isPlaying()) {
        audioBowhead.pause();
        audioBowhead.currentTime = 0;
        $(".bowhead").removeClass("monster-background-color");
    } else {
        audioBowhead.play();
        $(".bowhead").addClass("monster-background-color");
    }
});


$(".Wubbox").click(function () {

    const isPlaying = function () {
        return audioWubbox
            && audioWubbox.currentTime > 0
            && !audioWubbox.paused
            && !audioWubbox.ended
            && audioWubbox.readyState > 2;
    }

    if (isPlaying()) {
        audioWubbox.pause();
        audioWubbox.currentTime = 0;
        $(".Wubbox").removeClass("monster-background-color");
    } else {
        audioWubbox.play();
        $(".Wubbox").addClass("monster-background-color");
    }
});


$(".Rare-Wubbox").click(function () {

    const isPlaying = function () {
        return audioRareWubbox
            && audioRareWubbox.currentTime > 0
            && !audioRareWubbox.paused
            && !audioRareWubbox.ended
            && audioRareWubbox.readyState > 2;
    }

    if (isPlaying()) {
        audioRareWubbox.pause();
        audioRareWubbox.currentTime = 0;
        $(".Rare-Wubbox").removeClass("monster-background-color");
    } else {
        audioRareWubbox.play();
        $(".Rare-Wubbox").addClass("monster-background-color");
    }
});



$(".hoola").click(function () {

    const isPlaying = function () {
        return audioHoola
            && audioHoola.currentTime > 0
            && !audioHoola.paused
            && !audioHoola.ended
            && audioHoola.readyState > 2;
    }

    if (isPlaying()) {
        audioHoola.pause();
        audioHoola.currentTime = 0;
        $(".hoola").removeClass("monster-background-color");
    } else {
        audioHoola.play();
        $(".hoola").addClass("monster-background-color");
    }
});


$(".pompom").click(function () {

    const isPlaying = function () {
        return audioPompom
            && audioPompom.currentTime > 0
            && !audioPompom.paused
            && !audioPompom.ended
            && audioPompom.readyState > 2;
    }

    if (isPlaying()) {
        audioPompom.pause();
        audioPompom.currentTime = 0;
        $(".pompom").removeClass("monster-background-color");
    } else {
        audioPompom.play();
        $(".pompom").addClass("monster-background-color");
    }
});


$(".scups").click(function () {

    const isPlaying = function () {
        return audioScups
            && audioScups.currentTime > 0
            && !audioScups.paused
            && !audioScups.ended
            && audioScups.readyState > 2;
    }

    if (isPlaying()) {
        audioScups.pause();
        audioScups.currentTime = 0;
        $(".scups").removeClass("monster-background-color");
    } else {
        audioScups.play();
        $(".scups").addClass("monster-background-color");
    }
});


$(".quarrister").click(function () {

    const isPlaying = function () {
        return audioQuarrister
            && audioQuarrister.currentTime > 0
            && !audioQuarrister.paused
            && !audioQuarrister.ended
            && audioQuarrister.readyState > 2;
    }

    if (isPlaying()) {
        audioQuarrister.pause();
        audioQuarrister.currentTime = 0;
        $(".quarrister").removeClass("monster-background-color");
    } else {
        audioQuarrister.play();
        $(".quarrister").addClass("monster-background-color");
    }
});


$(".epic-wubbox-earth").click(function () {

    const isPlaying = function () {
        return audioEpicWubbox
            && audioEpicWubbox.currentTime > 0
            && !audioEpicWubbox.paused
            && !audioEpicWubbox.ended
            && audioEpicWubbox.readyState > 2;
    }

    if (isPlaying()) {
        audioEpicWubbox.pause();
        audioEpicWubbox.currentTime = 0;
        $(".epic-wubbox-earth").removeClass("monster-background-color");
    } else {
        audioEpicWubbox.play();
        $(".epic-wubbox-earth").addClass("monster-background-color");
    }
});













