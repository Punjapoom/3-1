import React from 'react'

export default function Calculator(){
    const num1=20
    const num2=4
    const calculator = (op) =>{
        let c = `${num1} ${op} ${num2}`
        let r = eval(c) //eval การตรวจสอบค่าในตัวแปร
        alert(`${cal} = ${result}`)
    }
    return(
        <div>
            <span>{num1}</span>
            <button onClick={() =>calculator('+')}> + </button>
            <button onClick={() =>calculator('-')}> - </button>
            <span>{num2}</span>
        </div>
    )
}