import React from 'react';
import { useTodoContext } from '../providers/todoprovider';


const Todolist = () => {
    const { todos } = useTodoContext();

    return (
        <div>
            <h1> Todo List </h1>
            {
                todos.map((todo, idx) => {
                    return <h3 key={idx} style={{color: "#646464a8"}}>{ todo }</h3>
                })
            }
        </div>
    )
}

export default Todolist;