import './App.css';
import imageOne from './shopping.jpg';
import imageTwo from './grocery.jpg';
import { GroceryList } from './groceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={ imageOne } width='200px' alt='shopping'/>
      </div>
      <div className='container'>
        <h1>Grocery list</h1>
      </div>
      <GroceryList/>
      <div className='container'>
        <img src={ imageTwo } width='300px' alt='grocery'/>
      </div>
    </div>
  );
}

export default App;
