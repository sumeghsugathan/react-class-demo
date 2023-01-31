import React, { useState } from "react";
import "./Usage.css";

const Usage = () => {
    const [number, setnumber] = useState(0);
    const [color, setColor] = useState("#d2d9dc");

    return (
        <div className="usage-container">
            <h1>useState usage demo</h1>
            <div style={{ background: color }} className="demo-container">
                <h2>{number}</h2>
            </div>
            <div className="button-container">
                <button
                    onClick={() => {
                        setnumber(number + 1);
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        setnumber(number - 1);
                    }}
                >
                    -
                </button>
                
            </div>
            <div className="button-container">
                    <button
                        onClick={() => {
                            setColor("#d2d9dc");
                        }}
                    >
                        light
                    </button>
                    <button
                        onClick={() => {
                            setColor("#13444e");
                        }}
                    >
                        dark
                    </button>
                </div>
        </div>
    );
};

export default Usage;
