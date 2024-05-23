import React, {useMemo} from "react";
import {Product} from "../models/Product";
import requestAPI from "../API/requestAPI";

interface useArrivalProductsProps {
    setArrivalProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    limit: number
}

const useArrivalProducts = ({setArrivalProducts, limit}: useArrivalProductsProps) => {
    useMemo(() => {
        requestAPI.getLimitProducts(limit)
            .then(result => {
            let arrivalProductsArray = [];
            for (let i = 0; i < limit; i++) {
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
        })
            .catch(error => console.log("Ooops, error occured!"))

    }, [])
}

export default useArrivalProducts;