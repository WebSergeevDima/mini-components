import React, {useState} from 'react';
import Select from "./Select";

export default {
    title: 'Select',
    component: Select,
}

export const SelectBase = () => {

    const selectList = [{value: '1', title: 'Name 1'}, {value: '2', title: 'Name 2'}, {value: '3', title: 'Name 3'}];
    let [value, setValue] = useState('1');

    const changeSelect = (value: string) => {
        setValue(value)
    }

    return (
        <Select value={value} list={selectList} changeSelect={changeSelect}/>
    )
};