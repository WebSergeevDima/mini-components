import React, {useState} from 'react';
import SelectNew from "./SelectNew";
import styled from "styled-components";

export default {
    title: 'SelectNew',
    component: SelectNew,
}

export const Base = () => {

    const [value, setValue] = useState('1');

    return <SelectNew value={value} items={[
        {title: 'Минск', value: '1'},
        {title: 'Москва', value: '2'},
        {title: 'Ещё город', value: '3'},
        {title: 'Ещё город 2', value: '4'}
    ]} clickSelectItem={setValue}/>;

}

export const WithoutValue = () => {

    const [value, setValue] = useState('null');

    return <SelectNew value={value} items={[
        {title: 'Минск', value: '1'},
        {title: 'Москва', value: '2'},
        {title: 'Ещё город', value: '3'},
        {title: 'Ещё город 2', value: '4'}
    ]} clickSelectItem={setValue}/>;

}

