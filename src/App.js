
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <District name='Singapore' special ='girls'/>
    <District name='Puran Dhaka' special ='katchi'/>
    <District name='Uttara' special ='Momo'/>

    </div>
  );
}
const districtStyle ={
  backgroundColor: 'khaki',
  border: '2px solid brown',
  margin : '20px',
  padding: '20px',
  borderRadius: '20px'
}


function District (props){
  const [power , setPower] = useState(1);
  const boostPower = () =>{
    const newPower = power * 2
    setPower(newPower)
  }
  return(
    <div style={districtStyle}>
      <h3>State Name:{props.name}</h3>
      <p>Found: {props.special}</p>
      <h3>Power:{power}</h3>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
