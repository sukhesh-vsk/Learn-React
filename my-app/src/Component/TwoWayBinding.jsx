import React, { useState } from "react";

function TwoWayBinding() {
    const[name, setName] = useState("");
    
    const changeName = (event) => setName(event.target.value);
    return (
        <div>
            <input value={name} onChange={changeName}></input>
            <p>Now, Say My Name...</p>
            <h1>{name}</h1>
        </div>
    );
}

export default TwoWayBinding;