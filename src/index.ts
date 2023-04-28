import learnts from './learn_ts';
import {a as defaultcon} from './learn_ts';
import generateJoke from './generateJoke';
import './styles/main.scss';

const laughing = require('./assets/laughing.svg');
const laughImg = document.getElementById('laughImg')! as HTMLImageElement;
learnts();
console.log(`${defaultcon} default constant from learn_ts`);
laughImg.src = laughing;

const jokeBtn = document.getElementById('joke')! as HTMLButtonElement;
jokeBtn.addEventListener('click',generateJoke);
const myButton = document.querySelector('#jokebtn')as HTMLButtonElement;;
myButton.addEventListener('click', () => {
    // Code to execute when the button is clicked
    generateJoke();
  });
