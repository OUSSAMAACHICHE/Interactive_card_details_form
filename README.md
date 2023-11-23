# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Screenshot](./design/desktop-preview.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
 <main>

      <section class="cards">
        <picture>
          <source media="(min-width: 980px)" srcset="images/bg-main-desktop.png">
          <source media="(max-width: 767px)" srcset="images/bg-main-mobile.png">

          <img src="images/bg-main-desktop.png" alt="background">
        </picture>
        <div class="back-card">
          <span>000</span>
        </div>
        <div class="front-card">
          <img src="images/card-logo.svg" alt="logo">
          <span class="nums">0000 0000 0000 0000</span>
          <div class="card_info">
            <span class="name">Jane Appleseed</span>
            <span class="count">00/00</span>
          </div>
        </div>
      </section>



      <div class="form">
        <label for="card_name">Cardholder Name</label>
        <input type="text" id="card_name" placeholder="e.g. Jane Appleseed">
        <span class="wrong-text"></span>

        <label for="card_number">Card Number</label>
        <input type="number" id="card_number" placeholder="e.g. 1234 5678 9123 0000">
        <span class="wrong-text"></span>

        <div class="date">
          <span>Exp. Date (MM/YY)</span>
          <span>CVC</span>
          <div class="date-fields">
            <input id="mm" type="text" placeholder="MM">
            <span id="wrong_month"></span>


            <input id="yy" type="text" placeholder="YY">
            <span id="wrong_year"></span>


            <input id="cvc" type="number" placeholder="e.g. 123">
            <span id="wrong_cvc"></span>


          </div>
        </div>

        <input type="submit" value="Confirm" class="submit">
      </div>

      <section class="thank">
        <img src="images/icon-complete.svg" alt="complete">
        <div class="thank_you">Thank you!</div>
        <p> We've added your card details
        </p>
        <button id="thank">Continue</button>
      </section>

    </main>
```
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');

:root {
	--White: hsl(0, 0%, 100%);
	--Lightgrayishviolet: hsl(270, 3%, 87%);
	--Darkgrayishviolet: hsl(279, 6%, 55%);
	--Verydarkviolet: hsl(278, 68%, 11%);
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-size: 18px;
}

body {
	font-family: 'Space Grotesk', sans-serif;
	font-size: 1rem;
}

img {
	display: block;
}



/* Section cards  */
.cards {
	width: 100%;
	position: relative;
}

.cards picture img {
	width: 100%;
	display: block;
	height: 250px;
}

.back-card {
	background-image: url(images/bg-card-back.png);
	width: 300px;
	height: 175px;
	border-radius: 10px;
	position: absolute;
	top: 30px;
	right: 10px;
	background-size: contain;
	background-repeat: no-repeat;
}

.back-card span {
	position: absolute;
	top: 40%;
	right: 15%;
	color: var(--White);
	font-size: 0.8rem;
}

.front-card {
	background-image: url(images/bg-card-front.png);
	width: 300px;
	height: 175px;
	border-radius: 10px;
	position: absolute;
	top: 120px;
	left: 20px;
	background-size: contain;
	background-repeat: no-repeat;
	padding: 20px;
}

.front-card img {
	width: 60px;
}

.front-card .nums {
	margin-top: 30px;
	color: var(--Lightgrayishviolet);
	font-weight: normal;
	letter-spacing: 2px;
	display: block;
}

.card_info {
	display: flex;
	justify-content: space-between;
	font-size: 0.7rem;
	margin-top: 10px;
	color: var(--Lightgrayishviolet);
}

/* End section cards  */
/*Start Form */
.form {
	margin-top: 70px;
	padding: 0 20px;
}

.form label {
	display: block;
	margin-bottom: 5px;
	text-transform: uppercase;
	color: var(--Verydarkviolet);
	letter-spacing: 2px;
	margin-top: 20px;
	font-size: 0.8rem;
}

.form input {
	display: block;
	width: 100%;
	padding: 15px;
	border-radius: 10px;
	border: 1px solid var(--Lightgrayishviolet);
}
.form input:focus {
	outline: none;
}

/* remove arrows of input type number  */
.form input::-webkit-inner-spin-button {
	appearance: none;
}

.form input::placeholder {
	color: var(--Lightgrayishviolet);
	font-size: 1.1rem;
	font-family: inherit;
}

.form .date {
	margin: 20px 0;
}

.form .date span {
	font-size: 0.8rem;
	display: inline-block;
	text-transform: uppercase;
	color: var(--Verydarkviolet);
	letter-spacing: 2px;
}

.form .date span:nth-child(2) {
	margin-left: 15px;
}

.form .date .date-fields {
	display: flex;
	gap: 10px;
	margin-top: 5px;
	position: relative;

}

.form .date .date-fields input {
	width: calc(70% / 3);
}
.form .date .date-fields span {
	position: absolute;
	font-size: 0.5rem;
	bottom: -15px;
	left: 0px;
	letter-spacing: 1px;
	color:  hsl(0, 100%, 66%);
}
.form .date .date-fields span:nth-child(2) {
	left: 23%;
}
.form .date .date-fields span:nth-child(4) {
	left: 54%;
}
.form .date .date-fields input:nth-child(4) {
	flex-grow: 1;
}

.form .submit {
	background-color: var(--Verydarkviolet);
	color: var(--White);
	font-family: inherit;
	font-size: 1.1rem;
	cursor: pointer;
}
.form .submit.disabled {
	pointer-events: none;
	cursor: not-allowed;
	opacity: 0.5;
}
.wrong-text {
	color: hsl(0, 100%, 66%);
	font-size: 0.8rem;
	text-transform: uppercase;
}
#card_name.wrong {
	border: 2px solid  hsl(0, 100%, 66%);
}
#card_number.wrong {
	border: 2px solid  hsl(0, 100%, 66%);
}
#mm.wrong {
	border: 2px solid  hsl(0, 100%, 66%);
}
#yy.wrong {
	border: 2px solid  hsl(0, 100%, 66%);
}
#cvc.wrong {
	border: 2px solid  hsl(0, 100%, 66%);
}
/*End Form */

.attribution {
	font-size: 11px;
	position: fixed;
	bottom: 10px;
}

.attribution a {
	color: hsl(228, 45%, 44%);
	font-weight: bold;
}

@media (min-width: 980px) {
	main {
		min-height: 100vh;
		display: flex;
		align-items: center;
		position: relative;
		justify-content: space-around;
	}

	.cards {
		height: 100vh;
		width: 370px;
		position: absolute;
		left: 0;
	}

	.cards picture img {
		height: 100%;
	}

	.back-card {
		top: 420px;
		left: 220px;
	}

	.front-card {
		top: 200px;
		left: 160px;
	}

	.form {
		position: absolute;
		right: 350px;
		max-width: 450px;
		margin: 0;
	}
}
@media (min-width: 980px) and (max-width: 1400px) {
	.form {
		right: 70px;
	}
}

/* THank section S */
.thank {
	text-align: center;
	margin-top: 130px;
	display: none;
}
.thank img  {
	width: 80px;
	margin: auto;
	margin-bottom: 30px;
}
.thank .thank_you {
	font-size: 1.7rem;
	text-transform: uppercase;
	letter-spacing: 4px;
	color: var(--Verydarkviolet);
}
.thank p {
	color: var(--Darkgrayishviolet);
	margin: 10px 0 40px;
}
.thank button {
	width: calc(100% - 50px);
	padding: 10px;
	border-radius: 10px;
	background-color: var(--Verydarkviolet);
	color: var(--White);
	font-family: inherit;
	font-size: 1.1rem;
	cursor: pointer;
}

@media (min-width: 980px) {
	.thank {
		margin: 0;
		margin-left: 350px;
		width: 400px;
	}
	.thank button {
		width: 100%;
	}
}
```
```js
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
```


## Author


- Frontend Mentor - [@Ouss_Ach](https://www.frontendmentor.io/profile/OUSSAMAACHICHE)


