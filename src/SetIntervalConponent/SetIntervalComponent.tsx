import React, {ChangeEvent, useState} from 'react';
import s from './SetIntervalComponent.module.css'
import {Button} from "../Buttons/Button";

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
                            className={s.setButton}
                    />
            </div>
        </>
    );
}

export default SetIntervalComponent;
