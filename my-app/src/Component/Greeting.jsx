function Greeting() {
    const name = 'John';
    const date = new Date();
    
    const options = {
                year : 'numeric',
                weekday : 'long',
                day : 'numeric',
                month : 'long'
            };

    var result = date.toLocaleDateString('en-us', options);

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to our website. Today is {result}</p>    
        </div>
    )
};

export default Greeting;