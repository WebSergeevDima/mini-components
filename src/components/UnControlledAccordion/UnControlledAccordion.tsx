import React, {useState} from "react";

type AccordionTitleValuePropsType = {
    titleValue: string
};

function UnControlledAccordion(props: AccordionTitleValuePropsType) {

    let [collapsed, setCollapsed] = useState(false);


        return (
            <div>
                <AccordionTitle title={props.titleValue} /> <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
                { !collapsed && <AccordionBody /> }
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