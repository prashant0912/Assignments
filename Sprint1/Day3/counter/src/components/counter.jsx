import {useState} from "react"
export const Counter = ({value})=>{
    const [counter,setCounter] = useState(value)
    return (
        <div>
            <h1 >Counter:<span className = {`${counter%2==0?"green":"red"}`}>{counter}</span></h1>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Increment</button>
            <button onClick = {()=>{
                setCounter(counter-1)
            }}>Decrement</button>
            <button onClick = {()=>{
                setCounter(counter*2)
            }}>Double</button>
        </div>
    )
}