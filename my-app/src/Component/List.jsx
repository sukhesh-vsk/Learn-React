import React from 'react'

const Disp=(props)=>{
    return (
        <h1>{`Hello ${props.name}`}</h1>
    );
}

const List = () => {
    const Names = ['Ramesh', 'Suresh', 'Ganesh', 'Sukhesh'];
    const stName = Names.map(
        (stu, idx) => {
            return (
                <li>{`${stu}`}</li>
            )
        }
    );

    return (
        <ol>{stName}</ol>
    );
}

export default List;