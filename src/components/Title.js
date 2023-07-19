import React from "react";
import Hat from "../img/hat.svg"
export default function Title() {
    return (
        <div className="titleBox">
            <img src={Hat} className='hatSvg' />
            <h1 className="title">Random Pizza</h1>
        </div>
    )
}