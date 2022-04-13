import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [userInput, setSomething] = useState({
    name: "",
    usn:"",
    university:"",
    gender:"",
    phoneNumber:''
  });
  const [shouldIShowValue, setShouldIShowValue] = useState(false);
  
  // i am a valid statement? I will be exicuted: else i will be exicuted


  const handleNameChange = event => {
    const newObject = {
     ...userInput,
     name: event.target.value 
    }
     
    setSomething(newObject)
  }

  const handleDataVisibility = () => {
    setShouldIShowValue(true);
  }

  return (
    <div className="App">
        <input 
        placeholder='Name' 
        onChange={handleNameChange} 
        value={userInput.name} />

        {
          shouldIShowValue
          ?
          <h1>{userInput.name}</h1>
          :
          null
        }

        <button onClick={handleDataVisibility} >Show Name</button>
    </div>
  );
}

export default App;
