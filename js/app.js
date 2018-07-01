
//initialize main 
let isPicked // variable to store if shape is selected or not.

let hInput;
let wInput;
let dInput;
let rInput;
let result;

let isCirc = false; //checks if circle is selected
//shapeSelect buttons
const sqSel = document.getElementById("square");
const triSel = document.getElementById("tri");
const circSel = document.getElementById("circ");

//input areas
const sqTriInputs = document.getElementById("sq-tri-inputs");
const circInputs = document.getElementById("circ-inputs");

//unit type select

//run button and result panel
const runBtn = document.getElementById("run");
const resultPrint = document.getElementById("result");


//add selected class to clicked button - remove from others - swap input fields
sqSel.addEventListener('click', function(){
	sqSel.classList.add("selected");
	triSel.classList.remove("selected");
	circSel.classList.remove("selected");
	sqTriInputs.classList.remove("hidden");
	circInputs.classList.add("hidden");	
});

triSel.addEventListener('click', function(){
	sqSel.classList.remove("selected");
	triSel.classList.add("selected");
	circSel.classList.remove("selected");
	sqTriInputs.classList.remove("hidden");
	circInputs.classList.add("hidden");
});

circSel.addEventListener('click', function(){
	sqSel.classList.remove("selected");
	triSel.classList.remove("selected");
	circSel.classList.add("selected");
	sqTriInputs.classList.add("hidden");
	circInputs.classList.remove("hidden");
	return isCirc = true;
});

//when run button clicked, get values from input fields then parse into ints
function getNums(){
	//for sqTri
	hInput = document.getElementById("heightInput").value;
	wInput = document.getElementById("widthInput").value;
	hInput.parseInt;
	wInput.parseInt;
	
	//for circ
	//dInput = document.getElementById("diameterInput").value;
	rInput = document.getElementById("radiusInput").value;
	//dInput.parseInt;
	rInput.parseInt;
}

//select formula function based on chosen shape
function selectFormula(){
	if(sqSel.classList.contains('selected') === true){
		findSquareArea();
	} else if (triSel.classList.contains('selected') === true){
		findTriArea();
	} else if (circSel.classList.contains('selected') === true){
		findCircArea();
	} else {
		
	}
}

//area of square math function
function findSquareArea(){
	result = hInput * wInput;
	console.log(result);
}

//area of triangle math function
function findTriArea(){
	result = hInput * wInput / 2;
	console.log(result);
}

function findCircArea(){
		 result = Math.round(Math.PI * rInput * 2); 
		 console.log(result);
}

runBtn.addEventListener('click', function(){

	getNums();
	selectFormula();
	let unitType = document.querySelector('#unitType').value;
	console.log(unitType);
	result += unitType;
	resultPrint.textContent = "Area: " + result;
});


