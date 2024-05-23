import React, {useEffect, useState} from 'react';
import cl from "./arrivals.module.css";
import requestAPI from "../../API/requestAPI";
import {Product} from "../../models/Product";
import useArrivalProducts from "../../hooks/useArrivalProducts";
import ProductCard from "../ProductCard/ProductCard";
import StartRating from "../StarRating/StartRating";



function Arrivals() {
    const [arrivalProducts, setArrivalProducts] = useState<Product[]>([]);

    useArrivalProducts({setArrivalProducts, limit: 4});

    return (
        <div className={cl.arrivalsContainer}>
          <h1 className={cl.arrivalsHeader}>New Arrivals</h1>
            <ProductCard title={"T-SHIRT WITH TAPE DETAILS"} rate={4.7} price={120} image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}/>
            <StartRating rate={4.5}/>
        </div>
    );
}

export default Arrivals;