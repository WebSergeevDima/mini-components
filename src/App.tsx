import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <OnOff onOff={true}/>
            <PageTitle title={"Hello"} />
            <Rating value={3} />
            <Accordion titleValue={"Меню 1"} collapsed={true}/>
            <Accordion titleValue={"Меню 2"} collapsed={false}/>
            <Rating value={4} />
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
