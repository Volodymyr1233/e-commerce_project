import React from "react";

//TODO

function CategoryItem(title: string, category: string) {
    return (
        <div>
            <h2>{title}</h2>
            <span>
                <img src={category}/> //TODO
            </span>
        </div>
    )
}

export default CategoryItem;