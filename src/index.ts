import generateJoke from './generateJoke';
import './styles/main.scss';

const laughing = require('./assets/laughing.svg');
const laughImg = document.getElementById('laughImg')! as HTMLImageElement;

laughImg.src = laughing;

const jokeBtn = document.getElementById('joke')! as HTMLButtonElement;
jokeBtn.addEventListener('click',generateJoke);
const myButton = document.querySelector('#jokebtn')as HTMLButtonElement;;
myButton.addEventListener('click', () => {
    // Code to execute when the button is clicked
    generateJoke();
  });
