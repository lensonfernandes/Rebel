import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ToDo = () => {
    let [input, setInput] = useState("");
    let [todos, setTodos] = useState([])

    let addToDo = (e) => {
        e.preventDefault();

        let newToDo = { 'text': e.target.elements.field.value, completed: false };
        let updatedToDo = [...todos];

        updatedToDo.push(newToDo);
        console.log(updatedToDo)
        setTodos(updatedToDo)
    }

    let handleDone =(index)=>{
    
        let todoData = [...todos];
        todoData[index].complete=true;
        setTodos(todoData)
       
    }


    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={addToDo}>
                <input type='text' value={input} name="field" onChange={e => setInput(e.target.value)}></input>
                <button type='submit'>Save</button>
            </form>
            <ul>

                {
                    todos.map((ele, index) => (
                        <li key={index}>{ele.text}
                            <button onClick={handleDone(index)}>
                                Done
                            </button>
                        </li>
                    )
                    ).reverse()
                }
            </ul>
<br></br>
<hr></hr>
            <ul>

                {
                    todos.map((ele, index) => (
                        <li key={index}>{ele.text}
                            <button onClick={handleDone}>
                                Done
                            </button>
                        </li>
                    )
                    ).reverse()
                }
            </ul>
        </div>
    )
}

export default ToDo