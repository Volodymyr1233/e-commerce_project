import React from "react";
import cl from "./startrating.module.css";

interface StartRatingProps {
    rate: number;
}
function StartRating({rate}: StartRatingProps) {
    const starsArr = [];

    const rateIntegerPart = Math.floor(rate);

    for (let i = 1; i <= rateIntegerPart; i++) {
        starsArr.push(<span className={cl.starColoredStyle}>★</span>);
    }

    const rateDecimalPartPercentage = Math.floor((rate - rateIntegerPart) * 100);


    starsArr.push(<span className={cl.starPartColoredStyle} style={{backgroundImage: `linear-gradient(to right, #FFC633 ${rateDecimalPartPercentage}%, white ${100-rateDecimalPartPercentage}%)`}}>★</span>)

    for (let i = rateIntegerPart+1; i < 5; i++) {
        starsArr.push(<span className={cl.starUnColoredStyle}>★</span>)
    }

    return (
        <div>
            {starsArr}
        </div>
    )
}

export default StartRating;