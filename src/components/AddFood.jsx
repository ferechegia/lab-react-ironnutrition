import { Divider, Input } from 'antd';
import { useState } from 'react';



// Iteration 4
function AddFoodForm(props) {

    // first states, then functions, then return statements

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    console.log(props, 'AddFoodForm')

const handleSubmit = (event) => {
    event.preventDefault()
    props.createNewFood(event)
}

const handleChangeName = (event) => {setName(event.target.value)}
const handleChangeImage = (event) => {setImage(event.target.value)}
const handleChangeCalories = (event) => {setCalories(event.target.value)}
const handleChangeServings = (event) => {setServings(event.target.value)}

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" onChange={handleChangeName} />

      <label>Image</label>
      <Input type="text" onChange={handleChangeImage} />

      <label>Calories</label>
      <Input type="text" onChange={handleChangeCalories} />

      <label>Servings</label>
      <Input type="text" onChange={handleChangeServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
