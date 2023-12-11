import React from 'react';
import MyForm from './Form';
import { Hello } from './HelloWorld';

class MyClassComp extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <MyForm></MyForm>
            </div>
        )
    }
};

export default MyClassComp;