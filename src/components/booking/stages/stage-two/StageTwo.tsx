import "./StageTwo.css"
import { Week } from "./calendar/Week"
import React, { useState } from 'react';

export function StageTwo() {

    const [number, setNumber] = useState(0);

    return <>

        <div className="stage-two-flex-column">
            <div className="stage-two-title-text">Select a date to book an appointment</div>
            <div className="calendar">
                <div className="calendar-month">
                    <div className="calendar-month-text">
                        July {number}
                    </div>
                    <div className="calendar-top-line"></div>
                </div>

                <div className="calendar-week-flex-column">
                    <div className="calendar-week-label-flex"> 
                        <div className="calendar-week-label-text"> S </div>
                        <div className="calendar-week-label-text"> M </div>
                        <div className="calendar-week-label-text"> T </div>
                        <div className="calendar-week-label-text"> W </div>
                        <div className="calendar-week-label-text"> T </div>
                        <div className="calendar-week-label-text"> F </div>
                        <div className="calendar-week-label-text"> S </div>
                    </div>
                    <Week weekNumber={0} currentlySelected={number} setSelected={setNumber}/>
                    <Week weekNumber={1} currentlySelected={number} setSelected={setNumber}/>
                    <Week weekNumber={2} currentlySelected={number} setSelected={setNumber}/>
                    <Week weekNumber={3} currentlySelected={number} setSelected={setNumber}/>
                </div>
            </div>

        </div>
    </>
}
