import React from 'react';
import MyForm from './Form';
import Helloworld from './HelloWorld';

class MyClassComp extends React.Component {
    render() {
        return (
            <div>
                <Helloworld />
                <MyForm></MyForm>
            </div>
        )
    }
};

export default MyClassComp;