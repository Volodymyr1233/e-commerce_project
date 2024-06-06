import React from "react";
import ProductsSection from "./ProductsSection/ProductsSection";
import cl from "./section.module.css";

function Sections() {
    return (
        <div>
            <ProductsSection key={1} title={"New Arrivals"} sliceStart={0} limit={4}/>
            <hr className={cl.middleLine}/>
            <ProductsSection key={2} title={"Top Selling"}  sliceStart={4} limit={8}/>
        </div>
    )
}


export default Sections;

