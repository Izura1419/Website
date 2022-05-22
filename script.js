const alph = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];
const cnsn = [1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1];
//33
const getRand = (min,max) =>{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hOne = document.querySelector('h1');

let quan = getRand(3,10);
let firstW = quan;
let word = 0;

let check = () => {

	word = getRand(0,32);

	if ( quan % 2 == 0 ) {
		if (cnsn[word] == 1) {
			hOne.textContent = hOne.textContent + alph[word];
		}
		else {
			check();
		}
	}
	else {
		if (cnsn[word] == 0) {
			hOne.textContent = hOne.textContent + alph[word];
		}
		else {
			check();
		}
	}
}

for (quan; quan > 0; quan--) {
	check();
}
