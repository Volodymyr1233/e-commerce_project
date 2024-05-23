import React from "react";
import cl from "./productcard.module.css";
interface ProductCardProps {
    title: string,
    rate: number,
    price: number,
    image: string,
}
function ProductCard ({title, rate, price, image}: ProductCardProps) {
    return (
        <div>
            <img src={image} className={cl.productImage}/>
            <p className={cl.title}>{title}</p>
            <p className={cl.rate}>{rate}</p>
            <p className={cl.price}>${price}</p>
        </div>
    )
}

export default ProductCard;