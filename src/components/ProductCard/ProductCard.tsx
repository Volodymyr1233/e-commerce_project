import React from "react";
import cl from "./productcard.module.css";
import StartRating from "../StarRating/StartRating";
interface ProductCardProps {
    title: string,
    rate: number,
    price: number,
    image: string,
}
function ProductCard ({title, rate, price, image}: ProductCardProps) {
    return (
        <div className={cl.productCard}>
            <img src={image} className={cl.productImage}/>
            <p className={cl.title}>{title.toLowerCase().slice(0, 27)}{title.length > 27 && "..."}</p>
            <StartRating rate={rate}/>
            <p className={cl.rate}>{rate}/5</p>
            <p className={cl.price}>${price}</p>
        </div>
    )
}

export default ProductCard;