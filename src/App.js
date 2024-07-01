import './App.css';
import InputForm from './components/InputForm/InputForm';

function App() {
  return (
    <div className="App">
      <h1 className='bg-[#4682B4] heading'>RECIPE GENERATOR</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 bg-slate-50  p-4 recipe-cols">
          
          <InputForm></InputForm>
        </div>
        <div className="col-span-8 bg-slate-50  p-4 recipe-cols">
          Recipes List
        </div>
      </div>
    </div>
  );
}

export default App;
