import React from "react";
import s from './incBtn.module.css'

type IncType = {
    value: number
    setCount: (value: number) => void
}


export function ButtonInc(props: IncType) {
   const isMax=props.value < 5
    function incHandler() {
        if (isMax) {
            props.setCount(props.value + 1)
        }
    }

    const incButtonClass = `${isMax? s.incBtn : s.incBtnDisabled}`
    return (<span>
        <button className={incButtonClass} onClick={incHandler}>inc</button>
    </span>)
}
