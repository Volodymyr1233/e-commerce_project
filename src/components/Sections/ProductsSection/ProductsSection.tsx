import React, {useState} from 'react';
import cl from "./productssection.module.css";
import {Product} from "../../../models/Product";
import ProductCard from "../../ProductCard/ProductCard";
import useProductsSection from "../../../hooks/useProductsSection";


interface ProductsSection {
    title: string,
    sliceStart: number,
    limit: number,
}
function ProductsSection({title, sliceStart, limit}: ProductsSection) {
    const [products, setProducts] = useState<Product[]>([]);
    useProductsSection({sliceStart: sliceStart, limit: limit, setProducts: setProducts})

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