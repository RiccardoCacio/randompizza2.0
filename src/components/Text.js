import React from "react";

export default function Text() {
    return (
        <div className="textBox">
            <p className="Text">
                Hey, anche tu non sai quale pizza scegliere? <br />
                Bene! Sei nel posto giusto<br />
                Perciò tieni il numero della tua pizzeria di fiducia<br />
                a portata di mano, e fai click nel tasto qua sotto<br />
                per scoprire la <span className="randomSpan">RandomPizza</span>  da noi scelta!
            </p>
        </div>
    )
}