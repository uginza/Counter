import React from "react";
import s from './resetButton.module.css';

type ResetType ={
    value:number
    setCount:(value:number)=>void
}

export function ButtonReset(props:ResetType){
const resetButtonClass=`${props.value<5?s.resetButtonDisabled:s.resetButton}`
    return (   <span>
        <button className={resetButtonClass} onClick={() => props.setCount(0)}>reset</button>
    </span>)


}