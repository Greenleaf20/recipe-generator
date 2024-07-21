import './InputForm.css'
import { Button, TextInput, Label, Dropdown, Alert } from "flowbite-react";
import { useEffect, useState } from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import Ingredient from '../Ingredient/Ingredient';
import axios from 'axios';
import { HiInformationCircle } from 'react-icons/hi2';

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
    const [recipeList, setRecipeList] = useState([]);
    const recipeListURL = 'https://api.spoonacular.com/recipes/complexSearch';
    const recipeURL = 'https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429';
    const [emptyAlert, setEmptyAlert] = useState(false);
    
    const apiKey = '9cf0dcafb2e44cfcb30ddbd94e611ea3';

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

    const deleteIngredient = (id) => {
        const newList = ingredientsList.filter((_, index) => index !== id);
        setIngredientsList(newList);
    }

    const removeAllIngredients = () => {
        setIngredientsList([]);
    }

    const clearResults = () => {
        setRecipeList([]);
        setCuisine('');
        removeAllIngredients();
    }

    useEffect(() => {
        sendRecipeList(recipeList);
    }, [recipeList, sendRecipeList]);

    const getRecipe = async (event) => {
        if (ingredientsList.length===0 && cuisine==='') {
            setEmptyAlert(true);
            setTimeout(() => {
                setEmptyAlert(false);
            },5000);
            return;
        }

        const newRecipeListUrl = recipeListURL+"?includeIngredients="+ingredientsList.join(',')+"&cuisine="+cuisine;
        axios.get(newRecipeListUrl , { headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }})
        .then(response => {
            const recipeIds = response.data.results.map(recipe => recipe.id).join(',');
            const newRecipeUrl = recipeURL + recipeIds
            axios.get(newRecipeUrl, { headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            }})
            .then(response2 => {
                setRecipeList(response2.data)
                // sendRecipeListToApp();
            })
            .catch(error2 => {
                console.log(error2);
            });
        })
        .catch(error => {
            console.error(error);
        });     
    }

    const listItems = cuisines.map((item, index) =>
        <Dropdown.Item key={index} onClick={() => handleCusineChange(item)}>{item}</Dropdown.Item>
    );

    return (
        <div className='ingredient-container'>
            <form className="flex max-w-md flex-col gap-4 input-form" onSubmit={addIngredient}>
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
                        className="p-1 w-full" >Add ingredient</Button>
                    </div>
                    <div className='col-span-6 p-4 button-column'>
                        <Button gradientMonochrome="success" type="button" onClick={getRecipe} 
                        className="p-1 w-full get-recipe-button" >Get recipes</Button>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 p-4 button-column'>
                    </div>
                    <div className='col-span-8 p-4 button-column'>
                        <Button gradientMonochrome="success" type="button" 
                        className="p-1 w-full" onClick={removeAllIngredients}>Remove all ingredients</Button>
                    </div>
                    <div className='col-span-2 p-4 button-column'>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 p-4 button-column'>
                    </div>
                    <div className='col-span-8 p-4 button-column'>
                        <Button gradientMonochrome="success" type="button" 
                        className="p-1 w-full" onClick={clearResults}>Clear results</Button>
                    </div>
                    <div className='col-span-2 p-4 button-column'>
                    </div>
                </div>
            </form>
            <div className='input-alert-container'>
                {
                    emptyAlert && <Alert color="failure" icon={HiInformationCircle}>
                        <span className="font-medium input-alert">Empty input!</span> Enter either ingredients or cuisine before submitting the form.
                    </Alert>
                }
            </div>
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