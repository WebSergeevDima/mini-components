import React from "react";

type AccordionTitleValuePropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
};

function Accordion(props: AccordionTitleValuePropsType) {

    if(props.collapsed) {
        return (
            <div>
                <AccordionTitle onChange={props.onChange} title={props.titleValue} />
                { !props.collapsed && <AccordionBody /> }
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle onChange={props.onChange}  title={props.titleValue} />
                { !props.collapsed && <AccordionBody /> }
            </div>
        );
    }

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
};


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
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

export default Accordion;