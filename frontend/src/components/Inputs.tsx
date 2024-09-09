import { Todos } from "./Todos";
import { useEffect, useState } from "react";
import axios from "axios";


export function Inputs(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/todos")
            .then(response=>{
            setTodos(response.data.todos)
            })
        },[todos])


    return <div className="bg-red-200 h-screen flex justify-center">
            
                <div className="flex flex-col mt-10">
                    <div className="rounded-lg bg-red-100 w-80 h-max text-center px-2 py-2 shadow-xl ">
                        <div className="text-left font-medium py-1">
                            Title
                        </div>
                        <div>
                            <input type="text" onChange={function (e){
                                setTitle(e.target.value)
                            }} className="w-full h-10 px-2 py-1" placeholder="Go to gym"></input>
                        </div>  
                        <div className="text-left font-medium py-1">
                            Description
                        </div>
                        <div>
                            <input type="text" onChange={function (e){
                                setDescription(e.target.value)
                            }} className="w-full h-10 px-2 py-1" placeholder="Pull day"></input>
                        </div>
                        <div className="mt-4">
                        <button type="button" onClick={()=>{
                            axios.post("http://localhost:3000/todo", {
                                title:title,
                                description:description
                            },{
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                            .then(function(response) {
                                alert("Todo added");
                            })                            
                                
                        }}
                        className="text-white bg-red-300 hover:bg-red-400 focus:ring-4 focus:ring-red-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-400 dark:hover:bg-red-300 focus:outline-none dark:focus:ring-blue-800">Add</button>
                        </div>
                    
                    </div>
                    <Todos todos={todos}></Todos>
                </div>

                
        

    </div>
}