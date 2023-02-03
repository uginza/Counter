import React from "react";
import {MainType} from "../App";

type ResetType ={
    value:number
    setCount:(value:number)=>void
}

export function ButtonReset(props:ResetType){

    return (   <span>
        <button onClick={() => props.setCount(0)}>reset</button>
    </span>)


}