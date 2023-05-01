import React from 'react'

export default function Table(){
    const data=[
        ['JavaScript',100],
        ['React',150],
        ['React-Native',180],
        ['Node.js',200],
        ['VS Code',120]
    ]
    const onMouseOverRow = (ev) => {
        ev.target.parentNode.style.backgroundColor='red'
    }
    const onMouseOut = (ev) => {
        ev.target.parentNode.style.backgroundColor='white'
    }

    const onClick = (ev) =>{
        let cal = ev.target.innerText
            alert(`${cal}`)
     }
   
return(
    <table border="1">
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Select</th>
            </tr>
        {
            data.map(item => {
                return(
        <tr onMouseOver={onMouseOverRow}
        onMouseOut={onMouseOut}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td><button onClick={(ev) => onClick(ev)}>{item[0]}</button></td>
        </tr>
        )
        } 
        )
        }

    </table>
)
}