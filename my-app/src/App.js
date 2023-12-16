import React from 'react';
import './App.css';
import ErrorBoundary from './Component/ErrorBoundary';
import Car from './Component/Car';
// import List from './Component/List';
// import TwoWayBind from './Component/TwoWayBinding';
// import Counter from './Component/Counter';
// import Buttons from './Component/Buttons';
// import Counter from './Component/Counter';
// import Greet from './Component/Greeting';
// import MyClassComp from './Component/MyClassComp';
// import Form from './Component/Form';
// import Helloworld from './Component/HelloWorld'; 


export default function App() {
  return (
    <div>
      <ErrorBoundary>
          <Car car="JCBL"/>
      </ErrorBoundary>
    </div>
  )
};

