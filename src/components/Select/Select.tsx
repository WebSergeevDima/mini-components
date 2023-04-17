import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";

type SelectListItemType = {
    value: string
}

type ListType = {
    value: string
    title: string
};

type PropsType = {
    changeSelect: (value: string) => void
    value: string
    list: ListType[]
}

const SelectBase = styled.div`
  position: relative;
  width: 200px;
  border-bottom: 1px #000 solid;
  padding: 10px 0 10px 0;
  cursor: pointer;
  background: #ebebeb;
  &:hover {
    background: rgb(213 213 213);
  }


  &.open .SelectList,
  &.open .SelectWrapper {
    display: block;
  }

  &.open .SelectArrow {
    transform: rotate(180deg);
  }
`;

const SelectArrow = styled.div`
  transition: all 0.2s ease 0s;
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid grey;
`;

const SelectTitle = styled.div.attrs(({value}: SelectListItemType) => {

})`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  justify-content: space-between;
`;

const SelectWrapper = styled.div`
  display: none;
  position: absolute;
  background: none;
  inset: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 99;
`;

const SelectList = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 100;
  width: 100%;
  margin: 42px 0 0 0;
  box-sizing: border-box;
  font-size: 16px;
`;

const SelectListItem = styled.div.attrs(({value}: SelectListItemType) => {

})`
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: rgba(25, 118, 210, 0.08);
  }
`;

const Select: React.FC<PropsType> = (props) => {

    let [open, setOpen] = useState<boolean>(false);

    const selectClickHandler = () => {
        setOpen(!open);
    }

    const changeSelectHandler = (e: ChangeEvent<HTMLDivElement>) => {
        const value = e.currentTarget.getAttribute('value');
        if (value) {
            props.changeSelect(value);
        }
        selectClickHandler();

    }

    const onClickWrapperHandler = () => {
        selectClickHandler();
    }

    let selectItem = props.list.find(item => item.value === props.value);

    return (
        <>
            <SelectBase onClick={selectClickHandler} className={open ? 'open' : ''}>
                <SelectTitle value={selectItem?.value}>
                    <div>{selectItem?.title}</div>
                    <SelectArrow className={'SelectArrow'}></SelectArrow>
                </SelectTitle>
                <SelectList className={'SelectList'}>
                    {props.list.map((item, index) => {
                        return <SelectListItem key={index} value={item.value}
                                               onClick={(e: ChangeEvent<HTMLDivElement>) => changeSelectHandler(e)}>{item.title}</SelectListItem>;
                    })}
                </SelectList>
                <SelectWrapper onClick={onClickWrapperHandler} className={'SelectWrapper'}></SelectWrapper>
            </SelectBase>
        </>
    );
}

export default Select;
