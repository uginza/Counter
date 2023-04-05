import React, {useEffect, useState} from 'react';
import s from './CounterInterface.module.css'
import i from '../Buttons/Button.module.css'
import {Button} from "../Buttons/Button";
import k from "./CounterInterface.module.css";
import {Counter} from "../Counter/Counter";

type CounterInterfaceType = {
    newMinValue: number
    newMaxValue: number
    onChangeMinValue: string
    onChangeMaxValue: string
}


function CounterInterface(props: CounterInterfaceType) {

    const [count, setCount] = useState(0);
    const [onChangeMinValue, setOnChangeMinValue] = useState('')
    const [onChangeMaxValue, setOnChangeMaxValue] = useState('')
    const [isMaxOnChangeValue, setisMaxOnChangeValue] = useState(0)

    useEffect(() => setisMaxOnChangeValue(props.newMaxValue), [props.newMaxValue])
    useEffect(() => setOnChangeMinValue(props.onChangeMinValue), [props.onChangeMinValue])
    useEffect(() => setOnChangeMaxValue(props.onChangeMaxValue), [props.onChangeMaxValue])

    const isMin = props.newMinValue
    useEffect(() => setCount(isMin), [isMin])


    const isMax = !props.newMaxValue ? count < 5 : count < props.newMaxValue
    const incButtonClass = `${isMax ? i.incBtn : i.incBtnDisabled}`
    const resetButtonClass = `${count === 0 ? i.resetButtonDisabled : i.resetButton}`
    const integerClass1 = `${isMax ? s.integerContainerActive : s.integerContainerDisabled}`

    const IntegerValueClass = () => {
        if (isMin === Number(onChangeMinValue)&& isMaxOnChangeValue === Number(onChangeMaxValue)) {
            return <Counter count={count}/>
        }
        else {
            return <div className={s.integerContainerTextActive}>enter values and press 'set'</div>
        }
    }



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
                <IntegerValueClass/>
            </div>
            <div className={s.buttonsContainer}>
                <Button onClick={incHandler} name="inc" className={incButtonClass}/>
                <Button onClick={resetHandler} name="reset" className={resetButtonClass}/>
            </div>

        </div>
    );
}

export default CounterInterface;
