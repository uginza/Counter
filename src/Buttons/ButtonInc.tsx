import React from "react";
import {MainType} from "../App";

type IncType ={
    value:number
    setCount:(value:number)=>void
}


export function ButtonInc(props:IncType){
function incHandler(){
    if(props.value<5){props.setCount(props.value+1)}
}
    return (  <span>
        <button onClick={incHandler}>inc</button>
    </span>)


}
