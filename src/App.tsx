import React from 'react';
import CounterInterface from "./CounterInterface/CounterInterface";
import SetIntervalComponent from "./SetIntervalConponent/SetIntervalComponent";
import s from './App.module.css'
import k from '../src/CounterInterface/CounterInterface.module.css'
import c from '../src/SetIntervalConponent/SetIntervalComponent.module.css'

function App() {

    return (
        <div className={s.counterContainer}>
            <div className={c.SetIntervalContainer}><SetIntervalComponent/></div>
            <div><CounterInterface/></div>
        </div>
    )
}

export default App;
