import React from "react";
import ProductsSection from "./ProductsSection/ProductsSection";
import cl from "./section.module.css";

function Sections() {
    return (
        <div>
            <ProductsSection title={"New Arrivals"} sliceStart={0} limit={4}/>
            <hr className={cl.middleLine}/>
            <ProductsSection title={"Top Selling"} sliceStart={4} limit={8}/>
        </div>
    )
}


export default Sections;

