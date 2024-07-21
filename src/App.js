import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import RecipeList from './components/RecipeList/RecipeList';

function App() {
  const getRecipeList = async (list) => {
    setRecipeList(list)
  }

  const [recipeList, setRecipeList] = useState([]);

  return (
    <div className="App">
      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-slate-100  p-4 recipe-cols">
          <h1 className='bg-[#4682B4] heading'>RECIPE GENERATOR</h1>
          <InputForm sendRecipeList={getRecipeList}/>
        </div>
        <div className="col-span-8 bg-slate-50  p-4 recipe-cols  overflow-y-auto">
          <RecipeList data={recipeList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
