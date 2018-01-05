const container = document.querySelector(".container");

fillGrid();

const boxHover = document.getElementsByClassName("box");

for (let i = 0; i < boxHover.length; i++) {
	boxHover[i].addEventListener("mouseover", () => {
		boxHover[i].style.cssText = `background-color: ${randomColorGen()};`;
	});

	boxHover[i].addEventListener("mouseout", () => {
		boxHover[i].style.cssText = "background-color: white; transition: background-color, .8s;";
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
	let alphaNum = "0123456789ABCDEF"; // trying with every color
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += alphaNum[Math.round(Math.random() * 16)];
	}

	return color;
}