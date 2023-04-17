import React, {useReducer} from "react";
import collapsedReducer, {TOGGLE_COLLAPSED} from "./reducer";

type AccordionTitleValuePropsType = {
    titleValue: string
};


function UnControlledAccordion(props: AccordionTitleValuePropsType) {

    let [collapsedState, dispatchCollapsed] = useReducer(collapsedReducer, {isCollapsed: false});

        return (
            <div>
                <AccordionTitle title={props.titleValue} /> <button onClick={()=>{dispatchCollapsed({type: TOGGLE_COLLAPSED})}}>TOGGLE</button>
                { !collapsedState.isCollapsed && <AccordionBody /> }
            </div>
        );

}

type AccordionTitlePropsType = {
    title: string
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>Меню 1</li>
            <li>Меню 2</li>
            <li>Меню 3</li>
        </ul>
    );
}

export default UnControlledAccordion;