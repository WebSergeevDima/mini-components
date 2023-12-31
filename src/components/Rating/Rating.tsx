import React from "react";

type RatingPropsType = {
    value: number
};

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0 && true}/>
            <Star selected={props.value > 1 && true}/>
            <Star selected={props.value > 2 && true}/>
            <Star selected={props.value > 3 && true}/>
            <Star selected={props.value > 4 && true}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
};

function Star(props: StarPropsType) {

    if (props.selected === true) {
        return (
            <span><b>Star</b> </span>
        );
    } else {
        return (
            <span>Star </span>
        );
    }

}