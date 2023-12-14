import React from 'react'

const Disp=(props)=>{
    return (
        <h1>{`Hello ${props.name}`}</h1>
    );
}

const List = () => {
    const Names = ['Ramesh', 'Suresh', 'Ganesh', 'Sukhesh'];
    const stName = Names.map(
        (stu) => <Disp name={stu}/>
    );

    return (
        stName
    );
}

export default List