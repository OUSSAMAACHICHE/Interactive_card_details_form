const code_card = document.querySelector('.nums');
const name_card = document.querySelector('.name');
const data_card = document.querySelector('.count');
const back_card = document.querySelector('.back-card span');

const input_name = document.querySelector('#card_name');
const input_number = document.getElementById('card_number');
const cvc = document.getElementById('cvc');
const month = document.getElementById('mm');
const year = document.getElementById('yy');

let wrongText = document.querySelectorAll('.wrong-text');

let btn = document.querySelector('.submit');





input_name.onkeyup = details;
input_number.onkeyup = details;
cvc.onkeyup = details;
month.onkeyup = details;
year.onkeyup = details;

let validation = true;

btn.addEventListener('click', () => {


	if (addDisabled()) {

		document.querySelector('.form').style.display = 'none';

		document.querySelector('.thank').style.display = 'block';

		
	}

});

document.getElementById('thank').addEventListener('click', function () {

	document.querySelector('.form').style.display = 'block';

	document.querySelector('.thank').style.display = 'none';

	clearData();
})

function addDisabled() {

	validation = checker();

	if (validation) {

		btn.classList.remove('disabled');
	} else {
		btn.classList.add('disabled');
	}

	return validation;
}



function details() {
	// date month and year
	year.value ? document.querySelector('.count').textContent = month.value.slice('0', '2') + '/' + year.value.slice('2', '4') : document.querySelector('.count').textContent;

	// back card code
	cvc.value ? back_card.textContent = cvc.value.slice('0', '3') : back_card.textContent;

	let cardN = input_number.value.slice('0', '4') + ' ' + input_number.value.slice('4', '8') + ' ' + input_number.value.slice('8', '12') + ' ' + input_number.value.slice('12', '16');
	// name card
	input_name.value ? name_card.textContent = input_name.value : name_card.textContent;


	input_number.value ? code_card.textContent = cardN : code_card.textContent;

	checker();
	addDisabled();
}

function checker() {

	let inputNumberValue = input_number.value;
	// check the input name
	if (!input_name.value) {
		input_name.classList.add('wrong');
		wrongText[0].textContent = 'Cant be blank';
		validation = false;
	} else {
		input_name.classList.remove('wrong');
		wrongText[0].textContent = '';
		validation = true;
	}
	// check the input number
	if (!inputNumberValue || inputNumberValue.length > 16 || inputNumberValue.length < 16) {
		input_number.classList.add('wrong');
		wrongText[1].textContent = 'Must be sixteen numbers';
		validation = false;
	} else {
		input_number.classList.remove('wrong');
		wrongText[1].textContent = '';

	}

	if (!month.value || month.value > 12 || month.value == 0) {
		month.classList.add('wrong');
		document.getElementById('wrong_cvc').textContent = "Can't be blank";
		validation = false;
	} else {
		month.classList.remove('wrong');
		document.getElementById('wrong_cvc').textContent = "";
	}

	if (!year.value || year.value < 2023 || year.value > 2030) {
		year.classList.add('wrong');
		document.getElementById('wrong_month').textContent = "Can't be blank";
		validation = false;
	} else {
		year.classList.remove('wrong');
		document.getElementById('wrong_month').textContent = '';
	}

	if (!cvc.value) {
		cvc.classList.add('wrong');
		document.getElementById('wrong_year').textContent = "Can't be blank";
		validation = false;
	} else if (cvc.value.length > 3) {
		cvc.classList.add('wrong');
		document.getElementById('wrong_year').textContent = "Three numbers only";
		validation = false;
	} else {
		cvc.classList.remove('wrong');
		document.getElementById('wrong_year').textContent = "";
	}
	return validation;
}

function clearData() {

	input_name.value = '';
	input_number.value = '';
	cvc.value = '';
	year.value = '';
	month.value = "";

	code_card.textContent = '';
	name_card.textContent = '';
	back_card.textContent = '';
	data_card.textContent = '';

}