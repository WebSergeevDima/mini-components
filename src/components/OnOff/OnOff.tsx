import React, {useState} from "react";
import s from './OnOff.module.css';

type OnOffPropsType = {
    //onOff: boolean
}

const OnOff: React.FC<OnOffPropsType> = (props) => {

    let [onOff, setOnOff] = useState(true);

    return (
        <div className={s.onOff}>
            <div><div className={`${s.green} ${onOff && s.active}`} onClick={()=>{setOnOff(true)}}></div></div>
            <div><div className={`${s.red} ${!onOff && s.active}`} onClick={()=>{setOnOff(false)}}></div></div>
            <div><div className={`${s.ball} ${onOff && s.active}`}></div></div>
        </div>
    );
}

export default OnOff