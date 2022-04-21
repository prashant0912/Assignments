import {useEffect, useState} from "react"
export const Todo = ()=>{
    const [text,setText] = useState("");
    const [todo,setTodo] = useState([]);
    const [pages,setPages] = useState(1)

    useEffect(()=>{
        getdata();

        return function clean(){
            console.log("Todo is unmounted")
        }
    },[pages])

    const getdata = async ()=>{
        const data = await fetch(`http://localhost:8080/todos?_page=${pages}&_limit=3`).then((d)=>
        d.json()
        );
        setTodo(data)
        
    }
    
    
    
    
    
    return (
        <div>
            <input onChange = {(e)=>{
                setText(e.target.value)
                // console.log(e.target.value)
            }} type="text" />
            <button onClick = {()=>{
                const payload = {
                    title:text,
                    status:false
                };
                fetch("http://localhost:8080/todos",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json",
                    },
                    body:JSON.stringify(payload)
                }).then(()=>{
                    getdata()
                })
            }}>Add Todo</button>
            {todo.map((e)=>{
                return (
                    <div>{e.title}</div>
                )
            })}
            <button onclick = {()=>{
                setPages(pages-1)
            }}>Prev</button>
            <button onclick = {()=>{
                setPages(pages+1)
            }}>Next</button>
        </div>
    )
}