import { useEffect, useState } from 'react';
import './RecipeCard.css';
import { Card } from "flowbite-react";

function RecipeCard({data}) {

    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isGlutenfree, setIsGlutenFree] = useState(false);
    const [isDairyfree, setDairyFree] = useState(false);
    const [serving, setServing] = useState(0);
    const [prepTime, setPrepTime] = useState(0);
    const [cookingTime, setCookingTime] = useState(0);
    const [instructions, setInstructions] = useState('');
    const [goodFor, setGoodFor] = useState([]); 
    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (data) {
            setImgUrl(data.image)
            setIsGlutenFree(data.glutenFree);
            setIsVegetarian(data.vegetarian);
            setIsVegan(data.vegan);
            setDairyFree(data.dairyFree);
            setInstructions(data.instructions)
            setGoodFor(data.dishTypes)
            setServing(data.serving);
            setCookingTime(data.cookingMinutes);
            setPrepTime(data.preparationMinutes);
            setTitle(data.title)
        }
    }, [data]);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className='recipe-container'>
            <Card className="max-w-sm recipe-card" imgAlt="Paneer recipe" 
            imgSrc={imgUrl}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <div className='allergy-container'>
                    {isVegetarian && <img src='/images/vegetarian.jpg' alt='vegetarian' className='allergy-logos'/>}
                    {isVegan && <img src='/images/vegan.png' alt='vegan' className='allergy-logos'/>}
                    {isGlutenfree && <img src='/images/gluten-free.jpg' alt='gluten-free' className='allergy-logos'/>}
                    {isDairyfree && <img src='/images/dairy-free.jpg' alt='dairy-free' className='allergy-logos'/>}
                </div>
                <div className='recipe-nums'>
                    {serving && (
                        <>
                            <span className='key'>Serving: </span>
                            {serving}
                            <br />
                        </>
                    )}
                    {prepTime && ( 
                        <>
                            <span className='key'>Preparation Time: </span>
                            {prepTime} Minutes
                            <br />
                        </>
                    )}
                    {cookingTime && ( 
                        <>
                            <span className='key'>Cooking Time: </span>
                            {cookingTime } Minutes
                            <br />
                        </>
                    )}
                    {goodFor && goodFor.length > 0 && (
                        <>
                            <span className='key'>Good For: </span>
                            {goodFor.map(item => capitalizeFirstLetter(item)).join(', ')}
                            <br />
                        </>
                    )}
                </div>
                <span className='key'>Instructions:</span>
                <p className="font-normal text-gray-700 dark:text-gray-400 instructions" 
                dangerouslySetInnerHTML={{ __html: instructions }}>
                </p>
            </Card>
        </div>
    );
}
export default RecipeCard;