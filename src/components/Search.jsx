import { Divider, Input } from 'antd';

// Iteration 4
function Search({searchFood, onSearch}) {
    const handleChange = (e) => {
        onSearch(e.target.value)
        }
  
    return (
      <>
        <Divider>Search</Divider>  
  
        <label>Search</label>
        <Input value={searchFood} type="text" onChange={handleChange} />
      </>
    );
  }
  
  export default Search;

