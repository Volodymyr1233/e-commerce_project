import React, {useEffect, useState} from 'react';
import cl from "./arrivals.module.css";
import requestAPI from "../../API/requestAPI";
import {Product} from "../../models/Product";
import useArrivalProducts from "../../hooks/useArrivalProducts";
import ProductCard from "../ProductCard/ProductCard";



function Arrivals() {
    const [arrivalProducts, setArrivalProducts] = useState<Product[]>([]);

    useArrivalProducts({setArrivalProducts, limit: 4});

    return (
        <div className={cl.arrivalsContainer}>
            <h1 className={cl.arrivalsHeader}>New Arrivals</h1>
            <div className={cl.arrivalProducts}>
                {arrivalProducts.map(arrivalProduct =>
                    <ProductCard title={arrivalProduct.title} rate={arrivalProduct.rate} price={arrivalProduct.price}
                                 image={arrivalProduct.image}/>
                )}
            </div>
            <button className={cl.viewButton}>View All</button>
                <hr className={cl.endLine}/>

        </div>
    );
}

export default Arrivals;