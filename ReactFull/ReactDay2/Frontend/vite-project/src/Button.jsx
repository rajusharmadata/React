import React, { useState } from "react";

export default function Button() {
    const [bgColor, setBgColor] = useState("");
    const [txColor, settexColor] = useState("red");

    function handleClick() {
        setBgColor(bgColor === "red" ? "blue" : "red"); // Toggle between red and blue
        console.log("Hello World");
    }

    function handleMouseOver() {
        settexColor(txColor === "red" ? "blue" : "red"); // Toggle between red and blue
        console.log("Mouse is over");
    }

    const paragraphStyles = {
        backgroundColor: txColor,
        color: "black",
        padding: "10px",
        borderRadius: "5px",
    };

    const buttonStyles = {
        backgroundColor: bgColor,
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    };

    function handleDoubleClick(){
        console.log("Double Clicked");
    }

    return (
        <div>
            <button style={buttonStyles} onClick={handleClick}>Click me</button>
            <p style={paragraphStyles} onMouseOver={handleMouseOver}>
                Hover over this text to change the background color.
            </p>

            <button onDoubleClick={handleDoubleClick}>Double Clicke</button>
        </div>
    );
}

