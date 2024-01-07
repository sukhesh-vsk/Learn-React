import React from "react";
import { useTodoContext } from "../providers/todoprovider";

const TaskCount  = () => {
    const { todos } = useTodoContext();

    return (
        <div>
            <h4>Total Tasks: {todos.length}</h4>
        </div>
    )
}

export default TaskCount;