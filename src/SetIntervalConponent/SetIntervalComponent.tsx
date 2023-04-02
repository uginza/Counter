import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import s from './SetIntervalComponent.module.css'
import {Button} from "../Buttons/Button";
import {Counter} from "../Counter/Counter";
import i from "../Buttons/Button.module.css";
import k from "../CounterInterface/CounterInterface.module.css";

type SetIntervalComponentType={
    onChange:(count:string)=>void
    onClick:()=>void
}

function SetIntervalComponent(props:SetIntervalComponentType) {

/*    const [count, setCount] = useState(0);
    const isMax = count < 5
    const incButtonClass = `${isMax ? i.incBtn : i.incBtnDisabled}`
    const resetButtonClass = `${count == 0 ? i.resetButtonDisabled : i.resetButton}`
    const integerClass = `${count < 5 ? s.integerContainerActive : s.integerContainerDisabled}`

    function incHandler() {
        if (isMax) {
            setCount(count + 1)
        }
    }*/
    const minValue = () => {
        let a = localStorage.getItem('minValue')
        if (a === null) {
            return ''
        }else{
            return a
        }
    }
const [value,setValue]=useState(minValue)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
        setValue(e.currentTarget.value)
    }

    const onClickHandler=()=>{
        props.onClick()
        localStorage.setItem('minValue',value)
    }

/*    useEffect(()=>{
        localStorage.setItem('minValue',value)
    },[value])*/

   /* const setToLocalStorageHandler=()=>{
        setValue(value)
    }*/
    return (
        <>
            <div className={s.setIntervalInterfaceContainer}>
                <div className={s.maxValueContainer}>
                    max value:<input type='number'/>
                </div>
                <div className={s.minValueContainer}>
                    start value:<input type='number' value={value} onChange={onChangeHandler}/>
                </div>
            </div>
            <div className={s.buttonsContainer}><Button name={"Set"} onClick={onClickHandler} className={''}/></div>
        </>
    );
}

export default SetIntervalComponent;
