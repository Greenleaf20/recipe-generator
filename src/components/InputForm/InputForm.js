import './InputForm.css'
import { Button, TextInput, Label, Dropdown } from "flowbite-react";
import { useState } from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import Ingredient from '../Ingredient/Ingredient';
import axios from 'axios';

function InputForm({sendRecipeList}) {
    const cuisines = [
        'Indian',
        'Italian',
        'Mexican',
        'Mediterranean',
        'Chinese',
        'Vietnamese'
    ]

    const [ingredient, setIngredient] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [ingredientsList, setIngredientsList] = useState([]);
    const [recipeList, setRecipeList] = useState([
        {
            image: 'https://img.spoonacular.com/recipes/715538-556x370.jpg',
            glutenFree: true,
            dairyFree: true,
            vegetarian: false,
            vegan: false,
            title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
            instructions: 'wash and rinse pork chops and place into the skillet.cut them into bite sized pieces and add half of the Basil Garlic simmer sauce.boil your water and start working on cooking your bow-tie pasta.when you have finished with boiling and draining your pasta, add it to the pork along with the rest of the Basil Garlic Simmering Sauce, mixing lightly.Next you will top with the Chunky Bruschetta Finishing Sauce, cover with Parmesan, and cover. Cooking on low heat 2 to 3 minutes or until heated through.',
            dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
            cookingMinutes: 30,
            preparationMinutes: 5
        },
        {
            image: 'https://i.ytimg.com/vi/tvTuMTZRN6Y/maxresdefault.jpg',
            glutenFree: false,
            dairyFree: false,
            vegetarian: true,
            vegan: true,
            title: 'Yummy naan and paneer',
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            dishTypes: ['lunch', 'main course'],
            cookingMinutes: 10,
            preparationMinutes: 25
        },
    ]);
    const recipeListURL = 'https://api.spoonacular.com/recipes/complexSearch';
    const recipeURL = 'https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429';

    const addIngredient = async (event) => {
        event.preventDefault();
        const newList = [...ingredientsList, ingredient];
        setIngredientsList(newList);
        setIngredient('');
    }

    const handleTextChange = async (event) => {
        setIngredient(event.target.value);
    }

    const handleCusineChange = async (event) => {
        setCuisine(event);
    }

    const deleteIngredient = async (id) => {
        setIngredientsList((prevList) => prevList.filter((_, index) => index !== id));
        console.log(ingredientsList)
    }

    function sendRecipeListToApp() {
        sendRecipeList(recipeList);
    }

    const getRecipe = async (event) => {
        // const newRecipeListUrl = recipeListURL+"?includeIngredients="+ingredientsList.join(',')+"&cuisine="+cuisine;
        // axios.get(newRecipeListUrl , { headers: {
        //     'Content-Type': 'application/json',
        //     'x-api-key': '9cf0dcafb2e44cfcb30ddbd94e611ea3'
        // }})
        // .then(response => {
        //     console.log(response);
        //     const recipeIds = response.data.results.map(recipe => recipe.id).join(',');
        //     console.log(recipeIds)
        //     const newRecipeUrl = recipeURL + recipeIds
        //     axios.get(newRecipeUrl, { headers: {
        //         'Content-Type': 'application/json',
        //         'x-api-key': '9cf0dcafb2e44cfcb30ddbd94e611ea3'
        //     }})
        //     .then(response2 => {
        //         console.log(response2)
        //     })
        //     .catch(error2 => {
        //         console.log(error2);
        //     });
        // })
        // .catch(error => {
        //     console.error(error);
        // });
        sendRecipeListToApp();
    }

    const listItems = cuisines.map((item, index) =>
        <Dropdown.Item key={index} onClick={() => handleCusineChange(item)}>{item}</Dropdown.Item>
    );

    // const makeIngredientItems = async ()
    // const ingredientItems = ingredientsList.map((item,index) => 
    //     <div className="col-span-4 p-4 ingredient-cols" key={index}>
    //         <Ingredient name={item} id={index} deleteIngredientTrigger={deleteIngredient}/>
    //     </div>
    // );

    return (
        <div>
            <form className="flex max-w-md flex-col gap-4" onSubmit={addIngredient}>
                <div className='cuisine-dropdown'>
                    <Dropdown label={cuisine || "Select Cuisine"} color="dark" value={cuisine}>
                        <Dropdown.Header>
                            <span className="block text-sm">Cuisines List</span>
                        </Dropdown.Header>
                        {listItems}
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => handleCusineChange('')}>Clear Selection</Dropdown.Item>
                    </Dropdown>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="ingredientInput" value="Enter Ingredient" />
                    </div>
                    <TextInput id="ingredientInput" className="ingredient-input" type="text" placeholder="Enter ingredient" 
                    required value={ingredient} onChange={handleTextChange} icon={MdLocalGroceryStore}/>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 p-4 button-column'>
                        <Button gradientMonochrome="success" type="submit" 
                        className="p-1 w-full" >Add Ingredient</Button>
                    </div>
                    <div className='col-span-6 p-4 button-column'>
                        <Button gradientMonochrome="success" type="button" onClick={getRecipe} 
                        className="p-1 w-full get-recipe-button" >Get Recipes</Button>
                    </div>
                </div>
            </form>
            <div className='ingredientsList'>
                <div className="grid grid-cols-12">
                    {ingredientsList.map((item,index) => 
                        <div className="col-span-4 p-4 ingredient-cols" key={index}>
                            <Ingredient name={item} id={index} deleteIngredientTrigger={deleteIngredient}/>
                        </div>
                    )}
                </div>   
            </div>  
        </div>
    );
}

export default InputForm;