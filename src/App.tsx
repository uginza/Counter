import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {ButtonInc} from "./Buttons/ButtonInc";
import {ButtonReset} from "./Buttons/ButtonReset";
import {Counter} from "./Counter/Counter";

export type MainType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={s.counter}>
            <Counter count={count}/>
            <ButtonInc setCount={setCount} value={count}/>
            <ButtonReset setCount={setCount} value={count}/>
        </div>
    );
}

export default App;
