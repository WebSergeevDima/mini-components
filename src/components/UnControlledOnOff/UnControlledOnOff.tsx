import React, {useState} from "react";
import s from './UnControlledOnOff.module.css';

type OnOffPropsType = {
    defaultOn?: boolean
}

const UnControlledOnOff: React.FC<OnOffPropsType> = (props) => {

    let [onOff, setOnOff] = useState(props.defaultOn ? props.defaultOn : false);

    return (
        <div className={s.onOff}>
            <div><div className={`${s.green} ${onOff && s.active}`} onClick={()=>{setOnOff(true)}}></div></div>
            <div><div className={`${s.red} ${!onOff && s.active}`} onClick={()=>{setOnOff(false)}}></div></div>
            <div><div className={`${s.ball} ${onOff && s.active}`}></div></div>
        </div>
    );
}

export default UnControlledOnOff