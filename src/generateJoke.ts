import axios from 'axios';

function generateJoke(){
    const config ={
        headers:{
            Accept:'application/json'
        }
    }
    axios.get('https://icanhazdadjoke.com',config).then(res=>{
       const jokeElement =  document.getElementById('joke')! as HTMLDivElement;
       jokeElement.innerHTML= res.data.joke;
    })
}
export default generateJoke;