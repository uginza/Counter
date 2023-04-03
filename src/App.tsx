import React, {useState} from 'react';
import CounterInterface from "./CounterInterface/CounterInterface";
import SetIntervalComponent from "./SetIntervalConponent/SetIntervalComponent";
import s from './App.module.css'
import c from '../src/SetIntervalConponent/SetIntervalComponent.module.css'

function App() {

    const [minValue, setMinValue] = useState(0)


    const onClickHandler=()=>{
        let newMinValue=localStorage.getItem('minValue')
        if(newMinValue!==null){
            setMinValue(Number(newMinValue))
        }

    }

    return (
        <div className={s.counterContainer}>
            <div className={c.SetIntervalContainer}>
                <SetIntervalComponent onClick={onClickHandler}/>
            </div>
            <div>
                <CounterInterface newMinValue={minValue}/>
            </div>
        </div>
    )
}

export default App;
