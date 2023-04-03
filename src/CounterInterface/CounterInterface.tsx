import React, {useEffect, useState} from 'react';
import s from './CounterInterface.module.css'
import i from '../Buttons/Button.module.css'
import {Button} from "../Buttons/Button";
import {Counter} from "../Counter/Counter";
import k from "./CounterInterface.module.css";

type CounterInterfaceType={
    newMinValue:number
}


function CounterInterface(props:CounterInterfaceType) {
   /* const minValue = () => {
        let a = localStorage.getItem('minValue')
        if (a !== null) {
            return JSON.parse(a)
        }
    }*/


    const [count, setCount] = useState(0);
    const isMin=props.newMinValue
    useEffect(()=>setCount(isMin),[isMin])

    const isMax = count < 5
    const incButtonClass = `${isMax ? i.incBtn : i.incBtnDisabled}`
    const resetButtonClass = `${count == 0 ? i.resetButtonDisabled : i.resetButton}`
    const integerClass = `${count < 5 ? s.integerContainerActive : s.integerContainerDisabled}`

    function incHandler() {
        if (isMax) {
            setCount(count + 1)
        }
    }

    function resetHandler() {
        setCount(0)
    }

    return (
        <div className={k.counterInterfaceContainer}>
            <div className={integerClass}>
                <Counter count={count}/>
            </div>
            <div className={s.buttonsContainer}>
                <Button onClick={incHandler} name="inc" className={incButtonClass}/>
                <Button onClick={resetHandler} name="reset" className={resetButtonClass}/>
            </div>

        </div>
    );
}

export default CounterInterface;
