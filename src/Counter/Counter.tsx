import React from 'react';
import {MainType} from "../App";

type CounterType={
    count:number
}

export function Counter(props:CounterType) {

    return( <div>{props.count}</div>)

}