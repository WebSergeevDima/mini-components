import React, {useState} from "react";
import s from './OnOff.module.css';

type OnOffPropsType = {
    on: boolean
    changeOnOff: (isOn: boolean) => void
}

const OnOff: React.FC<OnOffPropsType> = (props) => {

    return (
        <div className={s.onOff}>
            <div><div className={`${s.green} ${props.on && s.active}`} onClick={()=>{props.changeOnOff(true)}}></div></div>
            <div><div className={`${s.red} ${!props.on && s.active}`} onClick={()=>{props.changeOnOff(false)}}></div></div>
            <div><div className={`${s.ball} ${props.on && s.active}`}></div></div>
        </div>
    );
}

export default OnOff