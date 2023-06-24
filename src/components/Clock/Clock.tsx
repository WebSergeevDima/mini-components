import {FC, useEffect, useState} from "react";
import style from './Clock.module.css';

type PropsType = {

};

const addDoubleNumber = (num: number) => {
    return num < 10 ? '0' + num : num;
}


const Clock: FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());
    const [type, setType] = useState<string>('default');


    const showClock = (type: string) => {
        setType(type);
    }

    useEffect(() => {
        const iId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(iId);
        };

    }, []);

    const deg = 6;
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;


    let result;

    if('analog' === type) {
        result = <div className={style.clock}>
            <div className={style.hour}>
                <div className={style.hr} style={{'transform' : `rotateZ(${(hh) + (mm/12)}deg)`}}></div>
            </div>
            <div className={style.min}>
                <div className={style.mn} style={{'transform' : `rotateZ(${mm}deg)`}}></div>
            </div>
            <div className={style.sec}>
                <div className={style.sc} style={{'transform' : `rotateZ(${ss}deg)`}}></div>
            </div>
        </div>


    } else {
        result =
          <div>
            <span>{addDoubleNumber(date.getHours())}</span>
            :
            <span>{addDoubleNumber(date.getMinutes())}</span>
            :
            <span>{addDoubleNumber(date.getSeconds())}</span>
        </div>
    ;
    }
    return (
        <div>
            {result}
            <button onClick={() => showClock('default')}>HH:MM:SS</button><button onClick={() => showClock('analog')}>Аналоговые часы</button>
        </div>
    );
}

export default Clock;
