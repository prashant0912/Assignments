import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import {axios} from "axios"
import {Todo} from "./components/Todo"


function App() {
  const [show,setShow] = useState(true)
   return (
    <div className="App">
      {show?<Todo/>:null}
      <button onClick = {()=>{
        setShow(!show)
      }}>{show?"Hide":"Show"}Todos</button>
    </div>
  );
}

export default App;
