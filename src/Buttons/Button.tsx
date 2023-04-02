import React from "react";

type PropsType = {
    name: string
    className: string
    onClick: () => void
}


export function Button(props: PropsType) {

    return (<div>
        <button className={props.className} onClick={props.onClick}>{props.name}</button>
    </div>)
}
