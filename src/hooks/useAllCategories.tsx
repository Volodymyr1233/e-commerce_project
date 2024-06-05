import React, {useMemo} from "react";
import requestAPI from "../API/requestAPI";


const useAllCategories = (setAllCategories: React.Dispatch<React.SetStateAction<string[]>>) => {
    useMemo(async() => {
        const categories = await requestAPI.getAllCategories();

        setAllCategories(categories);
    }, []);
}

export default useAllCategories;