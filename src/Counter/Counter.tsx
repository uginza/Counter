import React from 'react';
import {MainType} from "../App";
import s from './counter.module.css'

type CounterType={
    count:number
}

export function Counter(props:CounterType) {

    return( <div className={s.counter}>{props.count}</div>)

}