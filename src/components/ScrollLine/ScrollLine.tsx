import React from 'react';

import cl from "./scrollLine.module.css";

function ScrollLine() {
    let logos = [
        {src: "Versace.png", class: cl.VersaceLogo},
        {src: "Zara.png", class: cl.ZaraLogo},
        {src: "Gucci.png", class: cl.GucciLogo},
        {src: "Prada.png", class: cl.PradaLogo},
        {src: "CalvinKlein.png", class: cl.CalvinKleinLogo}
    ]

    return (
       <div className={cl.scrollLine}>
            <div className={cl.logos}>
                {logos.map(logo =>
                    <span className={logo.class}>
                        <img src={`${process.env.PUBLIC_URL}/logos/${logo.src}`}/>
                    </span>
                )}

            </div>
       </div>
    )
}

export default ScrollLine;