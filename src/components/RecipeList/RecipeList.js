import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeList() {
    const [recipeList, setRecipeList] = useState([
        {
            image: 'https://img.spoonacular.com/recipes/715538-556x370.jpg',
            glutenFree: true,
            dairyFree: true,
            vegetarian: true,
            vegan: true,
            instructions: 'wash and rinse pork chops and place into the skillet.cut them into bite sized pieces and add half of the Basil Garlic simmer sauce.boil your water and start working on cooking your bow-tie pasta.when you have finished with boiling and draining your pasta, add it to the pork along with the rest of the Basil Garlic Simmering Sauce, mixing lightly.Next you will top with the Chunky Bruschetta Finishing Sauce, cover with Parmesan, and cover. Cooking on low heat 2 to 3 minutes or until heated through.',
            dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
            cookingMinutes: 30,
            preparationMinutes: 5
        },
        {
            image: 'https://img.spoonacular.com/recipes/715538-556x370.jpg',
            glutenFree: true,
            dairyFree: false,
            vegetarian: true,
            vegan: false,
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            dishTypes: ['lunch', 'main course'],
            cookingMinutes: 10,
            preparationMinutes: 15
        },
    ]);
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