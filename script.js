const text  =  `One: 'Hi Mary.' 
Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'`;

let correctText = text.replace(/\B'/g, '"').split('\n');
const dialog = document.querySelector('.dialog').innerHTML = correctText.join(`<br>`)
console.log(correctText);

const name = document.querySelector('.inputName');
const tel = document.querySelector('.inputTel');
const email = document.querySelector('.inputEmail');
const btn = document.querySelector('.btn');

const nameRegExp = new RegExp(/^[a-z]$/i);
const telRegExp = new RegExp((/^\+7[0-9]{10}$/));
const emailRegExp = new RegExp(/^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,4}$/i);

btn.addEventListener('submit', () => {
	if (nameRegExp(name)) {
		name.className = `errorStyle`;
		let errorName = document.querySelector('.errorName').className = 'errors errorName'
	}
})
