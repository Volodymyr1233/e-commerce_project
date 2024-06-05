import React from "react";
import cl from "./categoryitembig.module.css";
interface CategoryItemBigProps {
    title: string
}
function CategoryItemBig({title}: CategoryItemBigProps) {
    return (
        <div className={cl.categoryBigContainer}>
            <h2 className={cl.titleCategory}>{title}</h2>
            <span>
                <img src={require(`../images/${title}.png`)} className={cl.image}/>
            </span>
        </div>
    );
}

export default CategoryItemBig;