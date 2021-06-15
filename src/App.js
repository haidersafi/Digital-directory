import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from './Components/Card-list/Card-List';
import Searchbar from './Components/Searchbar/Searchbar.jsx'
function App() {
  const [state, setState] = useState([]);
  const [searchField,setSearchField] = useState('')
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setState((prevState) => [...prevState, ...data]);
      });
  }, []);
  const filteredRobots=state.filter(user=>(user.name.toLowerCase().includes(searchField.toLowerCase())))
  console.log(filteredRobots);
  const handleChange=(e)=>{setSearchField(e.target.value)}
  return (
    <div className="App">
    <h1>Digital Directory</h1>                              
    <Searchbar onHandleChange={handleChange} placeHolder='Enter Any Name' searchField={searchField}/>
    {filteredRobots.length?<CardList users={filteredRobots}/>:<h2>No Match Found</h2>}
     
    </div>
  );
}

export default App;
