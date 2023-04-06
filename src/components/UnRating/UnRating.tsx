import React, {useState} from "react";

export type UnRatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type UnRatingPropsType ={
    defaultValue?: UnRatingValueType
}

export function UnRating(props: UnRatingPropsType) {

    let [value, setValue] = useState<UnRatingValueType>(props.defaultValue ? props.defaultValue : 0);

    const changeStarHandler = (value: UnRatingValueType) => {
        setValue(value);
    }


    return (
        <div>
            <Star selected={value > 0 && true }/> <button onClick={()=>{changeStarHandler(1)}}>1</button>
            <Star selected={value > 1 && true }/> <button onClick={()=>{changeStarHandler(2)}}>2</button>
            <Star selected={value > 2 && true }/> <button onClick={()=>{changeStarHandler(3)}}>3</button>
            <Star selected={value > 3 && true }/> <button onClick={()=>{changeStarHandler(4)}}>4</button>
            <Star selected={value > 4 && true }/> <button onClick={()=>{changeStarHandler(5)}}>5</button>
        </div>
    );
}
type StarPropsType = {
  selected: boolean
};

function Star(props: StarPropsType) {

    return props.selected === true ? <span><b>Star</b> </span> : <span>Star </span>;

}