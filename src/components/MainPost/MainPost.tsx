import React from 'react';
import cl from "./mainpost.module.css";
import blackStarSmall from "./images/blackStarSmall.png";
import blackStarBig from "./images/blackStarBig.png";

function MainPost()  {
    //TODO
    // let addInfoDict = {
    //     "200+": "International Brands",
    //     "2,000+": "High-Quality Products",
    //     "30,000+": "Happy Customers"
    // }

    let addInfoArr = [
        {title: "200+", text: "International Brands", endLine: true},
        {title: "2,000+", text: "High-Quality Products", endLine: true},
        {title: "30,000+", text: "Happy Customers", endLine: false}
    ]


    return (
        <div className={cl.mainPostContainer}>
            <div className={cl.titleBlock}>
                <h1 className={cl.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your
                    individuality and cater to your sense of style.</p>
                <button className={cl.shopButton}>Shop now</button>
            </div>
            <span className={cl.starSmall}>
                <img src={blackStarSmall}/>
            </span>

            <span className={cl.starBig}>
                <img src={blackStarBig}/>
            </span>

            <div className={cl.addInfo}>
                {addInfoArr.map(item =>
                    <div className={cl.addInfoContainer}>
                        <div className={cl.addInfoItem}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                        {item.endLine && <div className={cl.verticalLine}></div>}
                    </div>
                )}
            </div>
        </div>

    )
}

export default MainPost;