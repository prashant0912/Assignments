import logo from './logo.svg';
import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const[end,setEnd] = useState(15)

  useEffect(()=>{
    let id =setInterval(()=>{
      setCounter((p)=>{
        console.log(p)
        if (p<end){
          return p+1
        }
        else{
          clearInterval(id)
        }
        return end
      })
    },500)
    return ()=>{
      clearInterval(id)
    }
  },[])
  return (
    <div className="App">
      <h1>Increment Timer</h1>
      <h1>Counter:{counter}</h1>
    </div>
  );
}

export default App;
