import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import ClearButton from './Components/ClearButton';
import Input from './Components/Input';

function App() {
  const [result , setResult] = useState("");
  return (
    <div className="App">
      <Input 
      result={result}
      setResult={setResult}
     
      />
      <ClearButton 
      setResult={setResult}
      result={result}
      />
      <Button 
     setResult={setResult}
     result={result}
      />
      
    </div>
  );
}

export default App;
