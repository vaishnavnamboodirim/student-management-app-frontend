import React, {useState } from 'react';

import {Form, Button} from 'react-bootstrap';
//import { Button } from 'semantic-ui-react';
import Axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"


function PostForm(){
    const URL = "https://v2.jokeapi.dev/joke/Any";
    const [data, setData] = useState({
        name : "",
        myclass : "",
        marks : "",
        Id : ""
    })

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }
    const URL2 = "https://jsonplaceholder.typicode.com/users"
    const RemoveData = (id) => {
        const [employee, setEmployees] = useState([])

         Axios.delete(`${URL2}/${id}`).then(res => {
            const del = res.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }

    function submit(e){
        e.PreventDefault();
        Axios.post(URL,{
            name: data.name,
            myclass: data.myclass,
            marks: data.marks,
            Id : data.Id
        })

        .then(res =>{
            console.log(res.data)
        })

    }
    return(
        <div className='col-sm-6 offset-sm-3'>
            <Form  onSubmit={(e) => submit(e)}>
                <h2>Add Student</h2>
                <input onChange={(e) => handle(e)} className='form-control' id="name" value={data.name} placeholder='name' type= "text"></input> 
                <br/>
                <input onChange={(e) => handle(e)} className='form-control' id="myclass" value={data.myclass} placeholder='myclass' type= "text"></input>
                <br/>
                <input onChange={(e) => handle(e)} className='form-control' id="marks" value={data.marks} placeholder='marks' type= "float"></input>
                <br/>
                <input onChange={(e) => handle(e)} className='form-control' id="Id" value={data.Id} placeholder='Id' type= "text"></input>
                <br/>
                <Button>Add</Button>
            </Form>
            <div>
            <Form>
                <h2>Delete Student</h2>
                <input  className='form-control' id="name" value={data.Delid} placeholder='name' type= "text"></input> 
                <br/>
                <Button className='button' onClick={() => RemoveData(data.Delid)}>Delete</Button>
            </Form>
        </div>


        </div>


    )
}

export default PostForm;