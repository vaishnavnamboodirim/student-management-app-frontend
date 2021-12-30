import React,{useState, useEffect} from "react";
import {Table} from "react-bootstrap"

function StudentList(){
    //const URL2 = "https://v2.jokeapi.dev/joke/Any"
    const [data, setData] = useState([]);
    useEffect(async()=>{
        const result = await fetch("https://localhost/8000/students")
        result = await result.json()
        setData(result)
    },[])
   console.warn("result", data)
    return(
        <div>
            <h1>Student List</h1>
            <Table>
                <tr>
                    <td>Name</td>
                    <td>Class</td>
                    <td>Marks</td>
                    <td>Id</td>
                </tr>
                {
                    data.map((item)=>
                        <tr>
                        <td>{item.category}</td>
                        <td>{item.id}</td>
                        <td>{item.safe}</td>
                        <td>{item.id}</td>
                    </tr> 
                    )
                }
            </Table>
        </div>
    )
}

export default StudentList;