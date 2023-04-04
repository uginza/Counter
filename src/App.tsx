import React, {useState} from 'react';
import CounterInterface from "./CounterInterface/CounterInterface";
import SetIntervalComponent from "./SetIntervalConponent/SetIntervalComponent";
import s from './App.module.css'
import c from '../src/SetIntervalConponent/SetIntervalComponent.module.css'

function App() {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const [onChangeMinValue, setonChangeMinValue] = useState('')


    const onClickHandler = () => {
        let newMinValue = localStorage.getItem('minValue')
        if (newMinValue !== null) {
            setMinValue(Number(newMinValue))
        }
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue !== null) {
            setMaxValue(Number(newMaxValue))
        }

    }

    const onChangeMinValueHandler = (onChangeMinValue: string) => {
        setonChangeMinValue(onChangeMinValue)
    }

    return (
        <div className={s.counterContainer}>
            <div className={c.SetIntervalContainer}>
                <SetIntervalComponent onClick={onClickHandler} onChange={onChangeMinValueHandler}/>
            </div>
            <div>
                <CounterInterface
                    newMinValue={minValue}
                    newMaxValue={maxValue}
                    onChangeMinValue={onChangeMinValue}
                />
            </div>
        </div>
    )
}

export default App;
