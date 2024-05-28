import React from "react";
import cl from "./categoriessection.module.css";
// TODO
function CategoriesSection() {
    return (
        <div className={cl.categoriesContainer}>
            <h1 className={cl.categoriesTitle}>Your favourite categories</h1>
        </div>
    )
}

export default CategoriesSection;