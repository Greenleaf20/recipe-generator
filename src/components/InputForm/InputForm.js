import './InputForm.css'
import { Button, TextInput, Label, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
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

    useEffect(()=>{
        console.log(ingredientsList)
    },[ingredientsList]);

    const handleTextChange = async (event) => {
        setIngredient(event.target.value);
    }

    const handleCusineChange = async (event) => {
        console.log(event)
        setCuisine(event.target.value);
    }

    const listItems = cuisines.map(item =>
        <Dropdown.Item key={item} value={item}>{item}</Dropdown.Item>
    );

    return (
        <div>
            <form className="flex max-w-md flex-col gap-4" onSubmit={addIngredient}>
                <div className='cuisine-dropdown'>
                    <Dropdown label="Select Cuisine" color="dark" value={cuisine} onChange={handleCusineChange}>
                        <Dropdown.Header onChange={handleCusineChange}>
                            <span className="block text-sm">Cuisines List</span>
                        </Dropdown.Header>
                        {listItems}
                        <Dropdown.Divider />
                        <Dropdown.Item>Clear Selection</Dropdown.Item>
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