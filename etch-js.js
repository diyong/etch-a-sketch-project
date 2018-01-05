const container = document.querySelector(".container");

fillGrid();

const boxHover = document.getElementsByClassName("box");

for (let i = 0; i < boxHover.length; i++) {
	boxHover[i].addEventListener("mouseover", () => {
		boxHover[i].style.cssText = `background-color: ${randomColorGen()};`;
	});

	boxHover[i].addEventListener("mouseout", () => {
		boxHover[i].style.cssText = "background-color: white;";
	});
}

function fillGrid() {
	let rowStart = 1;
	let rowEnd = 2;
	let colStart = 1;
	let colEnd = 2;

	while (rowEnd <= 13) { // outer loop works down the row

		while (colEnd <= 13) { // creates row of 12 boxes
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
	let alphaNum = "789ABCD"; // to limit colors to brighter spectrum
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += alphaNum[Math.round(Math.random() * 6)];
	}

	return color;
}