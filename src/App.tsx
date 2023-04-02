import React, {useState} from 'react';
import CounterInterface from "./CounterInterface/CounterInterface";
import SetIntervalComponent from "./SetIntervalConponent/SetIntervalComponent";
import s from './App.module.css'
import k from '../src/CounterInterface/CounterInterface.module.css'
import c from '../src/SetIntervalConponent/SetIntervalComponent.module.css'

function App() {

    const [count, setCount] = useState('')

    const onChangeHandler = (count:string) => {
        setCount(count)
    }

    return (
        <div className={s.counterContainer}>
            <div className={c.SetIntervalContainer}>
                <SetIntervalComponent onChange={onChangeHandler}/>
            </div>
            <div>
                <CounterInterface/>
            </div>
        </div>
    )
}

export default App;
