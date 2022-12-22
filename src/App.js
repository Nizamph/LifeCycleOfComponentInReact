
import { useState } from 'react';
import Count from './Count'
import "./styles.css";

export default function App() {
  const [showCount, setShowCount] = useState(true)
  const togglerHandler = () => {
    setShowCount(!showCount)
  }
  return (
    <div className="App">
   <button onClick={togglerHandler}>Remove Count</button>
     {showCount&&<Count/>}
    </div>
  );
}
