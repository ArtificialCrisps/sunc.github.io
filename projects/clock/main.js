let timeImage = document.querySelector(".time-image");

function updateClock() {

    let date = new Date();

    let minutes = date.getMinutes();

    console.log("Minutes:", minutes);


    if (minutes == 1) {
        timeImage.src = "media/fish.png";
    }

    if (minutes == 2) {
        timeImage.src = "media/fish1.png";
    }

    if (minutes == 5) {
        timeImage.src = "media/fish2.png";
    }

updateClock();

setInterval(updateClock, 60000);
}

