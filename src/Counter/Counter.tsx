import React from 'react';
import s from './counter.module.css'

type CounterType={
    count:number
}

export function Counter(props:CounterType) {
    const counterClass=`${props.count===5?s.counterMax:s.counter}`
    return( <div className={counterClass}>{props.count}</div>)

}