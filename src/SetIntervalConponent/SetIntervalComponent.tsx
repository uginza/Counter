import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './SetIntervalComponent.module.css'
import {Button} from "../Buttons/Button";
import b from '../Buttons/Button.module.css'

type SetIntervalComponentType = {
    onClick: () => void
    minValueOnChange:(e: string)=>void
    maxValueOnChange:(e: string)=>void
}

function SetIntervalComponent(props: SetIntervalComponentType) {

    const [minValue, setMinValue] = useState('0')
    const [maxValue, setMaxValue] = useState('5')

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
        props.minValueOnChange(e.currentTarget.value)
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
        props.maxValueOnChange(e.currentTarget.value)
    }
    const onClickHandler = () => {
        localStorage.setItem('minValue', minValue)
        localStorage.setItem('maxValue', maxValue)
        props.onClick()
    }
    const setButtonCondition2 = minValue === localStorage.getItem('minValue')
    && maxValue === localStorage.getItem('maxValue')
        ? b.setButtonDisabled : b.setButton

    const setButtonCondition1 = minValue === '0' && maxValue === '5'
        ? b.setButtonDisabled : setButtonCondition2
    const setButtonCondition3 = Number(minValue) <= 0 || Number(maxValue) <= 0
    || Number(minValue)===Number(maxValue)
        ?b.setButtonDisabled  : b.setButton

    const setButton = `${setButtonCondition1 || setButtonCondition3}`

    const startInputClass = `${Number(minValue) >= 0 
    && Number(minValue)!==Number(maxValue)? s.inputActive : s.inputNegative}`
    const maxInputClass = `${Number(maxValue) >= 0 
    && Number(minValue)!==Number(maxValue)? s.inputActive : s.inputNegative}`
    return (
        <>
            <div className={s.setIntervalInterfaceContainer}>
                <div className={s.maxValueContainer}>
                    max value
                    <input className={maxInputClass}
                           type='number'
                           value={maxValue}
                           onChange={onChangeMaxValueHandler}
                    />
                </div>
                <div className={s.minValueContainer}>
                    start value:
                    <input className={startInputClass}
                           type='number'
                           value={minValue}
                           onChange={onChangeMinValueHandler}
                    />
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={"Set"}
                        onClick={onClickHandler}
                        className={setButton}
                />
            </div>
        </>
    );
}

export default SetIntervalComponent;
