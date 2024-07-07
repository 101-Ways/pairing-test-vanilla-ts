
import { Demo } from "./components/demo";
const init = ():void => {
    const root = document.getElementById('root');
    const element = document.createElement('div');
    element.innerHTML = 'Hello World';
    root.appendChild(element);
    Demo(root, 'Hello Root');
}


document.addEventListener('DOMContentLoaded', (event) => {
console.log('DOM fully loaded and parsed');
    init();


});

