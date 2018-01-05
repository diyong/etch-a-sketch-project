const container = document.querySelector(".container");
const gridClearBtn = document.querySelector("#gridSetting");
const rainbowBtn = document.querySelector("#rainbowBtn");
let colorInput = document.querySelector("#colorInput");
let userGridSetting = 12; // initial setting to create 12x12 grid

fillGrid();

let boxHover = document.getElementsByClassName("box"); // had to come after fillGrid since no boxes before

hoverChange();

rainbowBtn.addEventListener("click", (e) => {
	hoverChange();
});

colorInput.addEventListener("input", (e) => {
	hoverChangeUserInput();
});

// Grid Setting / Reset button event listener
gridClearBtn.addEventListener("click", (e) => {
	document.querySelectorAll(".box").forEach((a) => {
		a.remove();
	});

	userGridSetting = prompt("Please enter an integer:(x) to create a custom grid of x columns and x rows.");

	if (Number.isInteger(+userGridSetting) !== true) {
		while (Number.isInteger(+userGridSetting) !== true) {
			userGridSetting = prompt("Incorrect input. Please enter an integer.");
		}
	}

	customGrid(); 
	fillGrid();
	boxHover = document.getElementsByClassName("box");

	hoverChange();
});

function hoverChange() {
	for (let i = 0; i < boxHover.length; i++) {
		boxHover[i].addEventListener("mouseover", () => {
			boxHover[i].style.cssText = `background-color: ${randomColorGen()};`;
		});
	}	
}

function hoverChangeUserInput() {
	for (let i = 0; i < boxHover.length; i++) {
		boxHover[i].addEventListener("mouseover", () => {
			boxHover[i].style.cssText = `background-color: ${colorInput.value}`;
		});
	}
}

function customGrid() {
	container.style.cssText = `grid-template-columns: repeat(${+userGridSetting}, 1fr); grid-template-rows: repeat(${+userGridSetting}, 1fr);`;
}

function fillGrid() {
	let rowStart = 1;
	let rowEnd = 2;
	let colStart = 1;
	let colEnd = 2;

	while (rowEnd <= (+userGridSetting+1)) { // outer loop works down the row

		while (colEnd <= (+userGridSetting+1)) { // creates row of 12 boxes
			let box = document.createElement("div");
			box.classList.add("box");
			box.style.cssText = `grid-area: ${rowStart} / ${colStart} / ${rowEnd} / ${colEnd};`;
			container.appendChild(box);

			colStart = ++colStart;
			colEnd = ++colEnd;
		}

		rowStart = ++rowStart;
		rowEnd = ++rowEnd;
		colStart = 1;
		colEnd = 2;

		let box = document.createElement("div");
		box.classList.add("box");
		box.style.cssText = `grid-area: ${rowStart} / 1 / ${rowEnd} / 2;`;
	}
}

function randomColorGen() {
	let alphaNum = "0123456789ABCDEF"; // trying with every color
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += alphaNum[Math.round(Math.random() * 16)];
	}

	return color;
}