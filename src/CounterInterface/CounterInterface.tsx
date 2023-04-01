import React, {useState} from 'react';
import s from './CounterInterface.module.css'
import {Button} from "../Buttons/Button";
import {Counter} from "../Counter/Counter";
import k from "./CounterInterface.module.css";


function CounterInterface() {

    const [count, setCount] = useState(0);
    const isMax = count < 5
    const incButtonClass = `${isMax ? s.incBtn : s.incBtnDisabled}`
    const resetButtonClass = `${count == 0 ? s.resetButtonDisabled : s.resetButton}`

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
            <div className={s.integerContainer}>
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
