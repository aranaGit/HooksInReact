import React, { useEffect, useState } from "react";

function Showdate() {

    const [date, setTime] = useState(new Date().toString());
    const displayDate = () => {
        setTime(new Date().toString());
    }

    //componentDidMount
    useEffect(() => {
        console.log("component is mounted or updated by first useEffect");        
    }, []);

    //componentDidUpdate
    useEffect(() => {
        console.log("component is mounted or updated by second useEffect");
        const interval = setInterval(displayDate, 1000);

        //ComponentWillunmount()
        return () => {
            console.log("clear interval");
            clearInterval(interval);
        }
    }, [date]);
    return (
        <div>
            <div>{date}</div>
            <button onClick={displayDate}>ShowDateHere</button>
        </div>
    );
}

export default Showdate;