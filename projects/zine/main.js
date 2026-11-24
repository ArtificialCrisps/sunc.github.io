// To a large extent, this code was referenced on classnotes "JS clicking event" and some reference on "nice.rocks"
let apocalypseBtn = document.querySelector(".button__song--apocalypse");
let apocalypseText= document.querySelector("#apocalypse-text")
let echoesBtn = document.querySelector(".button__song--echoes");
let echoesText= document.querySelector("#echoes-text");
let whereBtn = document.querySelector(".button__song--where");
let whereText= document.querySelector("#where-text");
let erlkonigBtn = document.querySelector(".button__song--erlkonig");
let erlkonigText= document.querySelector("#erlkonig-text");
let lastBtn = document.querySelector(".button__song--last");
let lastText= document.querySelector("#last-text");

function showApocalypse() {
    apocalypseText.classList.toggle("textboxOn");
    echoesText.classList.remove("textboxOn");
    whereText.classList.remove("textboxOn");
    erlkonigText.classList.remove("textboxOn");
    lastText.classList.remove("textboxOn");
}

function showEchoes() {
    echoesText.classList.toggle("textboxOn");
    apocalypseText.classList.remove("textboxOn");
    whereText.classList.remove("textboxOn");
    erlkonigText.classList.remove("textboxOn");
    lastText.classList.remove("textboxOn");
}
function showWhere() {
    whereText.classList.toggle("textboxOn");
    echoesText.classList.remove("textboxOn");
    apocalypseText.classList.remove("textboxOn");
    erlkonigText.classList.remove("textboxOn");
    lastText.classList.remove("textboxOn");
}

function showErlkonig() {
    erlkonigText.classList.toggle("textboxOn");
    whereText.classList.remove("textboxOn");
    echoesText.classList.remove("textboxOn");
    apocalypseText.classList.remove("textboxOn");
    lastText.classList.remove("textboxOn");
}

function showLast() {
    lastText.classList.toggle("textboxOn");
    whereText.classList.remove("textboxOn");
    echoesText.classList.remove("textboxOn");
    apocalypseText.classList.remove("textboxOn");
    erlkonigText.classList.remove("textboxOn");
}

apocalypseBtn.addEventListener("click", showApocalypse)
echoesBtn.addEventListener("click", showEchoes)
whereBtn.addEventListener("click", showWhere)
erlkonigBtn.addEventListener("click", showErlkonig)
lastBtn.addEventListener("click", showLast)