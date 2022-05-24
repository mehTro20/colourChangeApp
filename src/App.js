import { useState } from 'react';
import './App.css';

function App() {
  const [changeColor, setChangeColor] = useState(false)


  const handleChangeColor = () => {
    setChangeColor(true)
    // console.log('color is changed')
}

  return (
    <div className="App">
{!changeColor ? <h1 style={{color: 'red'}}>Mondli</h1> : <h1>Tumi</h1>}
      <button onClick={handleChangeColor} >Change color</button>
    </div>
  );
}

export default App; 
