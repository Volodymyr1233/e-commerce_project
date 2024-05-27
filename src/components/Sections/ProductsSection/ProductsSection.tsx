import React, {useState} from 'react';
import cl from "./productssection.module.css";
import {Product} from "../../../models/Product";
import ProductCard from "../../ProductCard/ProductCard";


interface ProductsSection {
    title: string,
    products: Product[],
}
function ProductsSection({title, products}: ProductsSection) {
    return (
        <div className={cl.sectionContainer}>
            <h1 className={cl.sectionHeader}>{title}</h1>
            <div className={cl.sectionProducts}>
                {products.map(product =>
                    <ProductCard title={product.title} rate={product.rate} price={product.price}
                                 image={product.image}/>
                )}
            </div>
            <button className={cl.viewButton}>View All</button>
        </div>
    );
}

export default ProductsSection;