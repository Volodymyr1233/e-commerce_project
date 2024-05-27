import React, {useMemo} from "react";
import {Product} from "../models/Product";
import requestAPI from "../API/requestAPI";

interface useArrivalProductsProps {
    sliceStart: number,
    limit: number,
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
}

const useProductsSection = ({sliceStart, limit, setProducts}: useArrivalProductsProps) => {
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

                setProducts(arrivalProductsArray.slice(sliceStart, limit));
            })
            .catch(error => console.log("Ooops, error occured!"));
    }, [])
}

export default useProductsSection;