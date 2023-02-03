import React from "react";
import {MainType} from "../App";
import s from './resetButton.module.css';

type ResetType ={
    value:number
    setCount:(value:number)=>void
}

export function ButtonReset(props:ResetType){

    return (   <span>
        <button className={s.resetButton} onClick={() => props.setCount(0)}>reset</button>
    </span>)


}