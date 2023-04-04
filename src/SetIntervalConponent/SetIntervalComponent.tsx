import React, {ChangeEvent, useState} from 'react';
import s from './SetIntervalComponent.module.css'
import {Button} from "../Buttons/Button";
import b from '../Buttons/Button.module.css'

type SetIntervalComponentType = {
    onClick: () => void
}

function SetIntervalComponent(props: SetIntervalComponentType) {

    const [minValue, setMinValue] = useState('0')
    const [maxValue, setMaxValue] = useState('5')

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        localStorage.setItem('minValue', minValue)
        localStorage.setItem('maxValue', maxValue)
        props.onClick()
    }

    const setButtonCondition1 = minValue === '0' && maxValue === '5'
        ? b.setButtonDisabled : b.setButton
    const setButtonCondition2 = minValue === localStorage.getItem('minValue')
    && maxValue === localStorage.getItem('maxValue')
        ? b.setButtonDisabled : b.setButton


    const setButton = `${setButtonCondition1 && setButtonCondition2}`

    return (
        <>
            <div className={s.setIntervalInterfaceContainer}>
                <div className={s.maxValueContainer}>
                    max value
                    <input type='number'
                           value={maxValue}
                           onChange={onChangeMaxValueHandler}
                    />
                </div>
                <div className={s.minValueContainer}>
                    start value:
                    <input type='number'
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
