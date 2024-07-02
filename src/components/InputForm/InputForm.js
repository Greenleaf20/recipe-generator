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
        console.log("Added ingredient");
        const newList = [...ingredientsList, ingredient];
        setIngredientsList(newList)
    }

    const handleTextChange = async (event) => {
        setIngredient(event.target.value);
    }

    const handleCusineChange = async (event) => {
        setCuisine(event);
    }

    const listItems = cuisines.map((item, index) =>
        <Dropdown.Item key={index} onClick={() => handleCusineChange(item)}>{item}</Dropdown.Item>
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
                <Button gradientMonochrome="success" type="submit" className="p-1 w-1/4" >Add</Button>
            </form>
            <Ingredient></Ingredient>
        </div>
    );
}

export default InputForm;