import React from 'react';

const Greeting = () => {
    const name = 'John';
    const result = getFormattedDate();

    return (
        <div>
            <GreetUser name={name} date={result} />
        </div>
    );
};

const GreetUser = (props) => {
    const {name, date} = props;

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to our website. Today is {date}</p>    
        </div>
    );
};

const getFormattedDate = () => {
    const date = new Date();
    const options = {
                year : 'numeric',
                weekday : 'long',
                day : 'numeric',
                month : 'long'
            };
    
    return date.toLocaleDateString('en-us', options);
};

export default Greeting;