import React from "react";

type AccordionTitleValuePropsType = {
    titleValue: string
    collapsed: boolean
};

function Accordion(props: AccordionTitleValuePropsType) {

    if(props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
                { !props.collapsed && <AccordionBody /> }
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
                { !props.collapsed && <AccordionBody /> }
            </div>
        );
    }

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

export default Accordion;