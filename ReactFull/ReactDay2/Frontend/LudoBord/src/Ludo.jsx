import { useState } from "react";

export default function Ludo(){
    let[arr,setarr] = useState((["no Moves"]));
    let[moves,setMoves] = useState(
        {
        blue:0,
        yellow:0,
        green:0,
        red:0
    });

    function bluebtanHandler(){
        console.log("blud btn was clicked ")
        setMoves({ ...moves, blue : moves.blue + 1});
        // setMoves((prevMove)=>{
        //     return {...prevMove,blue:prevMove.blue+1}
        // });
        // arr.push("raju");
        setarr((prevArr)=>{
            return [...prevArr,"bluemoves"] // array rendering with help spred using 
        });

    }
    function yellowbtanHandler(){
        console.log("blud btn was clicked ")
        setMoves({ ...moves, yellow : moves.yellow + 1});
    }
    function greenbtanHandler(){
        console.log("blud btn was clicked ")
        setMoves({ ...moves, green : moves.green + 1});
    }
    function redbtanHandler(){
        console.log("blud btn was clicked ")
        setMoves({ ...moves, red : moves.red + 1});
    }
    return (
        <div>
            <h1>this is a Ludo game </h1>
            <p>{arr}</p>
            <div className="leaderBoard">
                <p>Blue move = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={bluebtanHandler}>+1</button>
                <p>yellow move = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={yellowbtanHandler}>+1</button>
                <p>green move = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={greenbtanHandler}>+1</button>
                <p>red move = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={redbtanHandler}>+1</button>
            </div>
        </div>
    );
}