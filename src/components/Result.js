import React, { useState } from "react";
import PizzeJson from './Pizze.json'




const pizzaResult = () => PizzeJson[Math.floor(Math.random() * 14)];



export default function Result() {
    const [pizza, setPizza] = useState('');

    const yourPizza = () => {
        setPizza(pizzaResult());
        window.scrollTo(0, document.body.scrollHeight);
        console.log('1')
    }

    return (
        <>
            <div className="buttonBox">
                <button onClick={yourPizza} className="randomButton">RandomPizza</button>
            </div>
            <div className="resultBox">
                <p className="resultText">{pizza}</p>
            </div>
        </>
    )
}
