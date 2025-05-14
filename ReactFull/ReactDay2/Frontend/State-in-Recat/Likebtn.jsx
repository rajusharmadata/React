import { useState } from "react";

export default function Likebtn() {
    // Correctly initializing state for 'isLiked'
    let [isLiked, setIsLiked] = useState(false);
    let [clickes,setclickes] = useState(0);

    // Typo in function name: 'handelonClick' should be 'handleOnClick'
    function handleOnClick() {
        // Correctly toggling the 'isLiked' state
        setIsLiked(!isLiked);
        setclickes(clickes+1);
    }

    return (
        <div>
            {/* 
                1. Syntax error: Missing parentheses around the JSX inside the 'onClick' handler.
                2. Both conditions render the same icon. You likely want to use different icons for liked and unliked states.
            */}
            <span onClick={handleOnClick}>
                <span>clickes = {clickes}</span>
                { 
                    isLiked 
                        ? (<i className="fa-solid fa-heart"></i>) // Use a solid heart icon for the liked state
                        : (<i className="fa-regular fa-heart"></i>) // Use a regular heart icon for the unliked state
                }
            </span> 
        </div>
    );
}