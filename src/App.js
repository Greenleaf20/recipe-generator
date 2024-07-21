import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import RecipeList from './components/RecipeList/RecipeList';
import bg2 from './images/bg2.jpg'

function App() {
  const getRecipeList = async (list) => {
    setRecipeList(list)
  }

  const [recipeList, setRecipeList] = useState([]);

  return (
    <div className="App">
      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-slate-100  p-4 recipe-cols recipe-input-col">
          <div className='Heading' style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <h1 className='heading' style={{ zIndex: 1 }}>RECIPE GENERATOR</h1>
          </div>
          <InputForm sendRecipeList={getRecipeList}/>
        </div>
        <div className="col-span-8 bg-slate-50  p-4 recipe-cols recipe-output-col">
          <RecipeList data={recipeList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
