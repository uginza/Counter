import React, {useState} from 'react';
import CounterInterface from "./CounterInterface/CounterInterface";
import SetIntervalComponent from "./SetIntervalConponent/SetIntervalComponent";
import s from './App.module.css'
import c from '../src/SetIntervalConponent/SetIntervalComponent.module.css'

function App() {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)


    const onClickHandler=()=>{
        let newMinValue=localStorage.getItem('minValue')
        if(newMinValue!==null){
            setMinValue(Number(newMinValue))
        }
        let newMaxValue=localStorage.getItem('maxValue')
        if(newMaxValue!==null){
            setMaxValue(Number(newMaxValue))
        }

    }

    return (
        <div className={s.counterContainer}>
            <div className={c.SetIntervalContainer}>
                <SetIntervalComponent onClick={onClickHandler}/>
            </div>
            <div>
                <CounterInterface newMinValue={minValue} newMaxValue={maxValue}/>
            </div>
        </div>
    )
}

export default App;
