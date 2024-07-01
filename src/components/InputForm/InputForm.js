import { Button, TextInput, Label } from "flowbite-react";
import { useState } from "react";
import { MdLocalGroceryStore } from "react-icons/md";

function InputForm() {
    const [ingredient,setIngredient] = useState('');

    const addIngredient = async (event) => {
        console.log("Added ingredient");
    }

    const handleTextChange = async (event) => {
        setIngredient(event.target.value);
    }

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={addIngredient}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="ingredientInput" value="Enter Ingredient" />
                </div>
                <TextInput id="ingredientInput" className="ingredient-input" type="text" placeholder="Enter ingredient" 
                required value={ingredient} onChange={handleTextChange} icon={MdLocalGroceryStore}/>
            </div>
            <Button gradientMonochrome="success" type="submit" className="p-1 w-1/4" >Add</Button>
        </form>
    );
}

export default InputForm;