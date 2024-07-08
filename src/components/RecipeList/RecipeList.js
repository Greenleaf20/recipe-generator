import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeList({data}) {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        if (data) {
            setRecipeList(data);
        }
    }, [data]);

    return (
        <div className="grid grid-cols-12">
            {recipeList.map((item,index) => 
                <div className="col-span-6 p-2">
                    <RecipeCard data={item}/>
                </div>
            )}
        </div>
    );
}

export default RecipeList;