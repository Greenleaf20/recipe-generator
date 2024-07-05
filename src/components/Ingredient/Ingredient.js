import './Ingredient.css';
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";

function Ingredient({name, id, deleteIngredientTrigger}) {
    function removeIngredient() {
        deleteIngredientTrigger(id);
    }
    return (
        <div className="ingredient-container">
            <Banner>
                <div className="flex w-full justify-between border-b border-blue-700 bg-blue-100 p-4 dark:border-gray-600 dark:bg-gray-700 ingredient-item">
                    <div className="mx-auto flex items-center">
                        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            {name}
                        </p>
                    </div>
                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                        <HiX className="h-4 w-4" onClick={removeIngredient}/>
                    </Banner.CollapseButton>
                </div>
            </Banner>
        </div>
    );
}
export default Ingredient;