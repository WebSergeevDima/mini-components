import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnRating} from "./components/UnRating/UnRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";

function App() {

    let [on,setOn] = useState<boolean>(true);

    const changeOnOff = (isOn: boolean) => {
        setOn(isOn);
    }

    return (
        <div>
            <OnOff on={on} changeOnOff={changeOnOff} />
            <UnControlledOnOff/>
            <PageTitle title={"Hello"} />
            <Rating value={3} />
            <Accordion titleValue={"Меню 1"} collapsed={true} onChange={()=>{}}/>
            <Accordion titleValue={"Меню 2"} collapsed={false} onChange={()=>{}}/>
            <Rating value={4} />
            <UnControlledAccordion titleValue={"Меню 3"}/>
            <UnRating/>
        </div>
    );
}
type PageTitlePropsType = {
  title: string
};

function PageTitle (props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}


export default App;
