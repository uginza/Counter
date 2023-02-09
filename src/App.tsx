import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {Button} from "./Buttons/Button";
import {Counter} from "./Counter/Counter";


function App() {

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
        <div className={s.counter}>
            <Counter count={count}/>
            <div className={s.buttons}>
                <Button onClick={incHandler} name="inc" className={incButtonClass}/>
                <Button onClick={resetHandler} name="reset" className={resetButtonClass}/>
            </div>

        </div>
    );
}

export default App;
