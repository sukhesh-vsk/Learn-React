import React from 'react'

function Test() {
    const datas = {
        name : 'raj',
        age : 28
    }
    const ListItem = datas.map((key, item) => {
        return (<li>{item}</li>)
    })

    return (
        <ul>
            {ListItem}
        </ul>
    )
}

export default Test