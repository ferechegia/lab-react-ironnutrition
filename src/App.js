import './App.css';
import {  Row,  Divider,  Button, Input, Col, Card } from 'antd';
import foods from './foods.json';
import {useState} from 'react';
//import { Divider, Input } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFood';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods)
  const [searchFood, setSearchFood] = useState('')

  function createNewFood(newFood) {
    console.log(newFood, 'this is the food created')
    setFood([newFood, ...foods])
  }

  function deleteFood(name) {
    const deleteFoodBox = food.filter((elem) => {
      if (name === elem.name) {
        return false 
      } else {
        return true
      }
    })
    setFood(deleteFoodBox)
  }

  return (
    <div className="App">
    
      <AddFoodForm createNewFood={createNewFood}/> 
      
      <Button> Hide Form / Add New Food </Button>

      <Search searchFood={searchFood} onSearch={setSearchFood}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food
        .filter((elem, i) => {
          return elem.name.toLowerCase().includes(searchFood.toLowerCase())
        })
        .map((elem, i) => {
        return (
          <div>
          <FoodBox
          foods= {elem}
          key = {elem.name + i}
          deleteFood = {deleteFood}
          />
          </div>
        )
})}
      </Row>
    </div>
  )
}
export default App;