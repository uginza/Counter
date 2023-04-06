import React, {useEffect, useState} from 'react';
import s from './CounterInterface.module.css'
import i from '../Buttons/Button.module.css'
import {Button} from "../Buttons/Button";
import k from "./CounterInterface.module.css";
import {Counter} from "../Counter/Counter";

type CounterInterfaceType = {
    newMinValue: number
    newMaxValue: number
    isValueChanged: boolean
}

function CounterInterface(props: CounterInterfaceType) {

    const [count, setCount] = useState(0);

    const isMin = props.newMinValue
    useEffect(() => setCount(isMin), [props.newMinValue])


    const isMax = !props.newMaxValue ? count < 5 : count < props.newMaxValue
    const incButtonClass = `${isMax ? i.incBtn : i.incBtnDisabled}`
    const resetButtonClass = `${count === 0 ? i.resetButtonDisabled : i.resetButton}`
    const integerClass1 = `${isMax ? s.integerContainerActive : s.integerContainerDisabled}`
    const counterInterfaceClass = props.isValueChanged ?
        <div className={s.integerContainerTextActive}>enter values and press 'set'</div> :
        <Counter count={count}/>

    function incHandler() {
        if (isMax) {
            setCount(count + 1)
        }
    }

    function resetHandler() {
        setCount(isMin)
    }

    return (
        <div className={k.counterInterfaceContainer}>
            <div className={integerClass1}>
                {counterInterfaceClass}
            </div>
            <div className={s.buttonsContainer}>
                <Button onClick={incHandler} name="inc" className={incButtonClass}/>
                <Button onClick={resetHandler} name="reset" className={resetButtonClass}/>
            </div>

        </div>
    );
}

export default CounterInterface;
