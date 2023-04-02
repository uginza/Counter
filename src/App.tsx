import React, {useState} from 'react';
import CounterInterface from "./CounterInterface/CounterInterface";
import SetIntervalComponent from "./SetIntervalConponent/SetIntervalComponent";
import s from './App.module.css'
import k from '../src/CounterInterface/CounterInterface.module.css'
import c from '../src/SetIntervalConponent/SetIntervalComponent.module.css'

function App() {

    const [minValue, setMinValue] = useState('')

    const onChangeHandler = (minValue:string) => {
            setMinValue(minValue)


    }

    const onClickHandler=()=>{
        localStorage.getItem('minValue')
    }

    return (
        <div className={s.counterContainer}>
            <div className={c.SetIntervalContainer}>
                <SetIntervalComponent onChange={onChangeHandler} onClick={onClickHandler}/>
            </div>
            <div>
                <CounterInterface minValue={minValue}/>
            </div>
        </div>
    )
}

export default App;
