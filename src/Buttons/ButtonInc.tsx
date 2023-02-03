import React from "react";
import {MainType} from "../App";

type IncType ={
    value:number
    setCount:(value:number)=>void
}


export function ButtonInc(props:IncType){

    return (  <span>
        <button onClick={() => props.setCount(props.value+1)}>inc</button>
    </span>)


}
