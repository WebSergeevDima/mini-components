import React, {useState} from 'react';
import OnOff from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
}

export const TrueOnOff = () => <OnOff on={true} changeOnOff={()=>{}}/>;

export const FalseOnOff = () => <OnOff on={false} changeOnOff={()=>{}}/>;

export const ChangeOnOff = () => {

    let [on, setOn] = useState<boolean>(true);

    return (
        <OnOff on={on} changeOnOff={setOn}/>
    )
};