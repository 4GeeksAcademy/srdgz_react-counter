//import react into the bundle
import React from "react";
import ReactDOM from 'react-dom';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx";

//render your react application
let counter = 0;
setInterval(() => {
    ReactDOM.render(<Counter 
        num1 = {Math.floor((counter/1)%10)}
        num2 = {Math.floor((counter/10)%10)}
        num3 = {Math.floor((counter/100)%10)}
        num4 = {Math.floor((counter/1000)%10)}
        num5 = {Math.floor((counter/10000)%10)}
        num6 = {Math.floor((counter/100000)%10)}
        />, document.querySelector("#app"));
        counter++
}, 1000);