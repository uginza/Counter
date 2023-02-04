import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {ButtonInc} from "./Buttons/ButtonInc";
import {ButtonReset} from "./Buttons/ButtonReset";
import {Counter} from "./Counter/Counter";


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={s.counter}>
            <Counter count={count}/>
            <div className={s.buttons}>
                <ButtonInc setCount={setCount} value={count}/>
                <ButtonReset setCount={setCount} value={count}/>
            </div>

        </div>
    );
}

export default App;
