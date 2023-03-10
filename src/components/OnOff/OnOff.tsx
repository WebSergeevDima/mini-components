import React from "react";
import s from './OnOff.module.css';

type OnOffPropsType = {
    onOff: boolean
}

const OnOff: React.FC<OnOffPropsType> = (props) => {
    return (
        <div className={s.onOff}>
            <div><div className={`${s.green} ${props.onOff && s.active}`}></div></div>
            <div><div className={`${s.red} ${!props.onOff && s.active}`}></div></div>
            <div><div className={`${s.ball} ${props.onOff && s.active}`}></div></div>
        </div>
    );
}

export default OnOff