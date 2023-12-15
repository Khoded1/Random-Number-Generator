const number = document.querySelector('.number');
const generateBtn = document.querySelector('.generate');

const generateNumber = () => {
	//GENERATING NUMBER BTW 1 & 20
	let randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1; // Gener
	number.innerHTML = randomNumber;
};
generateBtn.addEventListener('click', generateNumber);

// let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// const random = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
