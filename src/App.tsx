import React, {useCallback, useEffect, useState} from 'react';
import CounterInterface from "./CounterInterface/CounterInterface";
import SetIntervalComponent from "./SetIntervalConponent/SetIntervalComponent";
import s from './App.module.css'
import c from '../src/SetIntervalConponent/SetIntervalComponent.module.css'

function App() {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const [isValid, validate] = useState(false)

    const [isValueChanged, setIsValueChanged] = useState(false)

    const onClickHandler = () => {
        let newMinValue = localStorage.getItem('minValue')
        if (newMinValue !== null) {
            setMinValue(Number(newMinValue))
        }
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue !== null) {
            setMaxValue(Number(newMaxValue))
        }
        setIsValueChanged(false)
    }

    const minValueOnChangeHandler = () => {
        setIsValueChanged(true)
    }
    const maxValueOnChangeHandler = () => {
        setIsValueChanged(true)
    }


    return (
        <div className={s.counterContainer}>
            <div className={c.SetIntervalContainer}>
                <SetIntervalComponent
                    onClick={onClickHandler}
                    minValueOnChange={minValueOnChangeHandler}
                    maxValueOnChange={maxValueOnChangeHandler}
                    validate={validate}

                />
            </div>
            <div>
                <CounterInterface
                    newMinValue={minValue}
                    newMaxValue={maxValue}
                    isValueChanged={isValueChanged}
                    isValueNegative={isValid}
                />
            </div>
        </div>
    )
}

export default App;
