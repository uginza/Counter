import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {ButtonInc} from "./Buttons/ButtonInc";
import {ButtonReset} from "./Buttons/ButtonReset";
import {Counter} from "./Counter/Counter";

export type MainType =0|1|2|3|4|5

function App() {

    return (
        <div className={s.counter}>
            <Counter/>
            <ButtonInc/>
            <ButtonReset/>
        </div>
    );
}

export default App;
