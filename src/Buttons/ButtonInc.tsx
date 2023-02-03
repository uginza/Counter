import React from "react";
import s from './incBtn.module.css'

type IncType ={
    value:number
    setCount:(value:number)=>void
}


export function ButtonInc(props:IncType){
function incHandler(){
    if(props.value<5){props.setCount(props.value+1)}
}
    return (  <span>
        <button className={s.incBtn} onClick={incHandler}>inc</button>
    </span>)


}
