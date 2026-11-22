var columns = 11;
var rows = 5;
var cellSize = 80;

var dots = document.querySelector(".dots");
		dots.style.gridTemplateColumns = "repeat(" + columns + ", " + cellSize + "px)";
		dots.style.width = (columns * cellSize) + "px";

		for (var row = 0; row < rows; row++) {
			for (var col = 0; col < columns; col++) {
				var div = document.createElement("div");
				div.className = "dot";
				div.style.height = cellSize + "px";
				div.style.width = cellSize + "px";

				dots.appendChild(div);
			}
		}
// Explained in page: Concept and References
let hoursImage = document.querySelector(".hour-image");

function updateClock() {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

var allDots = document.querySelectorAll(".dot");
  allDots.forEach(function(dot) {
  dot.style.backgroundColor =
  "rgb(" + red + ", " + green + ", " + blue + ")";

});

let newWidth = 400 - hours * 15;

hoursImage.style.width = newWidth + "px";

  console.log("Seconds:", seconds);
  console.log("Minutes:", minutes);
  console.log("Hours:", hours);

}


updateClock();
setInterval(updateClock, 1000);