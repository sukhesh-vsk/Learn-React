import React from 'react';

// import TodoProvider from './Component/Context-API/providers/todoprovider';
// import Todolist from './Component/Context-API/comp/todolist';
// import Taskcount from './Component/Context-API/comp/taskcount';
// import Test from './Component/Test';
// import LoginForm from './Component/LoginForm'
// import Form from './Component/Form';
// import List from './Component/List';
// import TwoWayBind from './Component/TwoWayBinding';
// import Counter from './Component/Counter';
// import Buttons from './Component/Buttons';
// import Counter from './Component/Counter';
// import Greet from './Component/Greeting';
// import MyClassComp from './Component/MyClassComp';
// import Helloworld from './Component/HelloWorld'; 
// import ErrorHandle from './Component/Error/ErrorHandle';
// import Divide from './Component/Error/Divide';
import { Provider } from 'react-redux';
// import { Store } from './Component/Redux-Counter/Store';
// import Counter from './Component/Redux-Counter/Counter';
import Store from './Component/Redux-Theme/Store';
import Theme from './Component/Redux-Theme/Theme';
import './App.css'

export default function App() {
  return (
      <Provider store={Store}>
        <Theme />
      </Provider>
  )
};

