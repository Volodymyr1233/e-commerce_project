import React, {useState} from "react";
import ProductsSection from "./ProductsSection/ProductsSection";
import {Product} from "../../models/Product";
import useProductsSection from "../../hooks/useProductsSection";
import cl from "./section.module.css";

function Sections() {
    const [arrivalProducts, setArrivalProducts] = useState<Product[]>([]);
    const [topSelleryProducts, setTopSelleryProducts] = useState<Product[]>([]);

    useProductsSection({sliceStart: 0, limit: 4, setProducts: setArrivalProducts});
    useProductsSection({sliceStart: 4, limit: 8, setProducts: setTopSelleryProducts})

    return (
        <div>
            <ProductsSection title={"New Arrivals"} products={arrivalProducts}/>
            <hr className={cl.middleLine}/>
            <ProductsSection title={"Top Selling"} products={topSelleryProducts}/>
        </div>
    )
}


export default Sections;

