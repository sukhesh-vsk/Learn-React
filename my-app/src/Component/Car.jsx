import React from 'react'

export default function Car({car}) {
    if(car === "JCB"){
        throw new Error("Not a Can")
    }
    return (
        <div>
            <h1>{car}</h1>
        </div>
    )
}
