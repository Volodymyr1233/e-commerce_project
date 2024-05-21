import React, {useEffect, useState} from 'react';
import cl from "./arrivals.module.css";
import requestAPI from "../../API/requestAPI";
import {Product} from "../../models/Product";



function Arrivals() {
    const [arrivalProducts, setArrivalProducts] = useState<Product[]>([]);

    useEffect(() => {
        requestAPI.getLimitProducts(5).then(result => {
            let arrivalProductsArray = [];
            for (let i = 0; i < 5; i++) {
                const arrivalProduct = {
                    id: result[i].id,
                    image: result[i].image,
                    title: result[i].title,
                    rate: result[i].rating.rate,
                    price: result[i].price,
                }

                arrivalProductsArray.push(arrivalProduct);
            }

            setArrivalProducts(arrivalProductsArray);

            console.log(arrivalProductsArray);
        })
    }, []);
    return (
        <div className={cl.arrivalsContainer}>
          <h1 className={cl.arrivalsHeader}>New Arrivals</h1>
        </div>
    );
}

export default Arrivals;