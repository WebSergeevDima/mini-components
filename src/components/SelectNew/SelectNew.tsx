import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";

type ItemsType = {
    title: string
    value: any
}

type PropsType = {
    value: string
    items: ItemsType[]
    clickSelectItem: (value: string) => void
}

const SelectNewItems = styled.div`
  background: #11a6b4;
  position: absolute;
  z-index: 110;
  padding: 5px;

  & .selected {
    background: red;
  }
  & .hovered {
    background: yellow;
  }
`;

const SelectNewBlock = styled.div`
  background: #66bf3c;
  
  & h3 {
    margin: 0;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    cursor: pointer;
  }

`;


const SelectNewStories: React.FC<PropsType> = (props) => {

    const [active, setActive] = useState(false);
    const [hover, setHover] = useState('');

    const titleClickHandler = () => {
        setActive(!active);
    }
    const hoverItemHandler = (value: string) => {
        setHover(value);
    }

    const itemClickHandler = (value: string) => {
        props.clickSelectItem(value);
        titleClickHandler();
    }

    const selectedItem = props.items.find(item => item.value === props.value);
    const hoveredItem = props.items.find(item => item.value === hover);

    return (
        <SelectNewBlock>
            <h3 onClick={titleClickHandler}>{selectedItem?.title}</h3>

            {active &&
                <SelectNewItems>
                    {props.items.map(item => {
                        return <div key={item.value} onMouseEnter={()=> hoverItemHandler(item.value)} onClick={()=>itemClickHandler(item.value)} className={(hoveredItem === item ? 'hovered' : '') + ' ' + (selectedItem === item ? 'selected' : '')}>{item.title}</div>;
                    })}
                </SelectNewItems>
            }

        </SelectNewBlock>
    );
};

export default SelectNewStories;