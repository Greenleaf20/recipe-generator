import './InputForm.css'
import { Button, TextInput, Label, Dropdown } from "flowbite-react";
import { useState } from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import Ingredient from '../Ingredient/Ingredient';


function InputForm() {
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
        ingredientsList.splice(id,1);
    }

    const getRecipe = async (event) => {
        console.log("Get the recipes list for the following keywords");
        const list = {
            "cuisiine": cuisine,
            "ingredients": ingredientsList.join(',')
        }
        console.log(list)
    }

    const listItems = cuisines.map((item, index) =>
        <Dropdown.Item key={index} onClick={() => handleCusineChange(item)}>{item}</Dropdown.Item>
    );

    const ingredientItems = ingredientsList.map((item,index) => 
        <div className="col-span-4 p-4 ingredient-cols" key={index}>
            <Ingredient name={item} id={index} deleteIngredientTrigger={deleteIngredient}/>
        </div>
    );

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
                    {ingredientItems}
                </div>   
            </div>  
        </div>
    );
}

export default InputForm;