import { useEffect, useState } from "react";
export const Form = ()=>{
    const [data,setData] = useState([])
    const [formdata,setFormdata] = useState({
        
    })
    useEffect(()=>{
        getdata();
    },[])

    const getdata = async ()=>{
        const data1 = await fetch("http://localhost:8080/users").then((d)=>
        d.json());
        setData(data1)
        console.log(data)
        

    }

    const handlechange = (e)=>{
        let {id,value,type,checked} = e.target;
        value = type ==="checkbox"?checked:value
       

        setFormdata({
            ...formdata,
            [id]:value,
        })
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/users",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json",
                    },
                    body:JSON.stringify(formdata)
                }).then(()=>{
                    getdata()
                })
                    
                
    }
    return (
        <>
        <h1> Add Employee Details</h1>
        <form onSubmit = {handlesubmit}>
            <label>Name</label>
            <input onChange ={handlechange} id = "username" type="text" placeholder = "Enter your name" /><br/>
            <label>Age</label>
            <input onChange ={handlechange} id = "age"type="number" placeholder =  "Enter your age" /><br/>
            <label >Address:</label>
            <input type="text" id="address" onChange={handlechange} placeholder="enter your address"required /><br />
            <label >Salary:</label>
            <input type="number" id="salary" onChange={handlechange} placeholder="entre your salary" required /><br />
            <label > Department Name:</label>
            <select  id="department" onChange={handlechange}>
                <option value="">Select</option>
                <option value="IT">IT</option>
                <option value="Civil">Civil</option>
                <option value="Mechnical">Mechnical</option>
                <option value="Eletrical">Electrical</option>
            </select><br />
            <label>Married</label>
            <input type="checkbox" id="married" onChange={handlechange} /><br/>
            <input type="submit" />
        </form>

        
        
        <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Martial Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e) => {
                                return (
                                    <tr  key={e.id}>
                                        <td>{e.username}</td>
                                        <td>{e.age}</td>
                                        <td>{e.address}</td>
                                        <td>{e.department}</td>
                                        <td>{e.salary}</td>
                                        <td>{e.married?"Married":"Unmarried"}</td>
                                        
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

    </>)

        
        
        
    
    
}