import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnRating} from "./components/UnRating/UnRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import Select from "./components/Select/Select";
import SelectNew from "./components/SelectNew/SelectNew";
import Clock from "./components/Clock/Clock";

function App() {

    let [on, setOn] = useState<boolean>(true);

    const changeOnOff = (isOn: boolean) => {
        setOn(isOn);
    }

    const selectList = [{value: '1', title: 'Name 1'}, {value: '2', title: 'Name 2'}, {value: '3', title: 'Name 3'}];
    let [valueSelect, setValueSelect] = useState('1');

    const changeSelect = (value: string) => {
        setValueSelect(value);
    }
    const clickSelectItem = (value: string) => {
        setValueSelect(value);
    }


    return (
        <div>

            <Clock />

            <br/>

            <SelectNew value={valueSelect} items={[
                {title: 'Минск', value: '1'},
                {title: 'Москва', value: '2'},
                {title: 'Ещё город', value: '3'},
                {title: 'Ещё город 2', value: '4'}
            ]} clickSelectItem={clickSelectItem} />

            <Select value={valueSelect} list={selectList} changeSelect={changeSelect}/>

            <OnOff on={on} changeOnOff={changeOnOff}/>
            <UnControlledOnOff/>
            <PageTitle title={"Hello"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Меню 1"} collapsed={true} onChange={() => {
            }}/>
            <Accordion titleValue={"Меню 2"} collapsed={false} onChange={() => {
            }}/>
            <Rating value={4}/>
            <UnControlledAccordion titleValue={"Меню 3"}/>
            <UnRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
};

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}


export default App;
