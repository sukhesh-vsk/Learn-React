import React from 'react';

const list = ["Go to gym", "Water Plants"];

const TodoContext = React.createContext();

const TodoProvider = ({children}) => {
    const [todos, setTodo] = React.useState(list);

    return (
        <TodoContext.Provider value={{todos}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => React.useContext(TodoContext);

export default TodoProvider;