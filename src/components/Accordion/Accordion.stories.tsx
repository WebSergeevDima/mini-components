import React, {useState} from 'react';
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

export const CollapsedTrue = () => <Accordion titleValue={'Menu 1'} collapsed={true} onChange={()=>{}} />;

export const CollapsedFalse = () => <Accordion titleValue={'Menu 2'} collapsed={false} onChange={()=>{}} />;

export const ChangedCollapsed = () => {

    let [value, setValue] = useState<boolean>(true);

    return <Accordion titleValue={'Menu 2'} collapsed={value} onChange={()=> setValue(!value)} />
};
