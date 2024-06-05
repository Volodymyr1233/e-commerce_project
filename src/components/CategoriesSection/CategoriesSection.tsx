import React, {useState} from "react";
import cl from "./categoriessection.module.css";
import useAllCategories from "../../hooks/useAllCategories";
import CategoryItemShort from "./CategoryItemShort/CategoryItemShort";
import CategoryItemBig from "./CategoryItemBig/CategoryItemBig";
function CategoriesSection() {
    const [allCategories, setAllCategories] = useState<string[]>([]);

    useAllCategories(setAllCategories);

    const orderList = ["short", "big", "big", "short"];

    return (
        <div className={cl.categoriesContainer}>
            <h1 className={cl.categoriesTitle}>Your favourite categories</h1>
            <div className={cl.imagesContainer}>
                {allCategories.map(((category, index) =>
                    orderList[index] === "short" ? <CategoryItemShort title={category}/> : <CategoryItemBig title={category}/>
                ))}
            </div>

        </div>
    )
}

export default CategoriesSection;