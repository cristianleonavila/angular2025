import './style.css'
//import './topics/01-basic-types';
import './topics/03-functions';
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `Hola Mundo`;

setTimeout(()  => console.log(" desde Vite!"), 2000);

