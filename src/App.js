import { Dropdown } from 'flowbite-react';
import './App.css';
import InputForm from './components/InputForm/InputForm';

function App() {
  return (
    <div className="App">
      <h1 className='bg-[#4682B4] heading'>RECIPE GENERATOR</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 bg-slate-50  p-4 recipe-cols">
          <div className='cuisine-dropdown'>
            <Dropdown label="Select Cuisine" color="dark">
              <Dropdown.Header>
                <span className="block text-sm">Cuisines List</span>
              </Dropdown.Header>
              <Dropdown.Item>Indian</Dropdown.Item>
              <Dropdown.Item>Italian</Dropdown.Item>
              <Dropdown.Item>Mexican</Dropdown.Item>
              <Dropdown.Item>Mediterranean</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Clear Selection</Dropdown.Item>
            </Dropdown>
          </div>
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
