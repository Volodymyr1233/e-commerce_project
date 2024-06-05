import React from "react";
import cl from "./categoryitemshort.module.css";

interface CategoryItemShortProps {
    title: string
}
function CategoryItemShort({title}: CategoryItemShortProps) {
    return (
        <div className={cl.categoryShortContainer}>
            <h2 className={cl.titleCategory}>{title}</h2>
            <span>
            <img src={require(`../images/${title}.png`)} className={cl.image}/>
        </span>
        </div>
    )
}

export default CategoryItemShort;