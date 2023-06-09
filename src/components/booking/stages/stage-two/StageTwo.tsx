import "./StageTwo.css"
import { Week } from "./calendar/Week"
import { BookingTime } from "./bookingtime/BookingTime"
import React, { useState } from 'react';
import { AlterBookingInfo } from "../../../../pages/booking/Booking"

type BookTime = {
    id: number;
    time: string;
}

export function StageTwo(props : AlterBookingInfo) {

    const [number, setNumber] = useState(1);
    const [selectedTime, setTime] = useState(0);

    const times: BookTime[] = [
    {   
        id: 0,
        time: "8:30am-9:30am"
    },
    {
        id: 1,
        time: "9:30am-10:30am"
    },
    {
        id: 2,
        time: "10:30am-11:30am"
    },
    {
        id: 3,
        time: "11:30am-12:30pm"
    },
    {
        id: 4,
        time: "12:30pm-1:30pm"
    },
    {
        id: 5,
        time: "1:30pm-2:30pm"
    },
    {
        id: 6,
        time: "2:30pm-3:30pm"
    },
    {
        id: 7,
        time: "3:30pm-4:30pm"
    },
    {
        id: 8,
        time: "4:30pm-5:30pm"
    },
    ]

    const bookingTimeClick = (id : number) => {
        var copy = props.fullbookinginfo;
        copy.date = "July " + id + ", " + times[id].time
        props.alterInfo(copy)
        setTime(id);
    }

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
            <div className="booking-flex-column">
                {times.map(time => (
                    <BookingTime
                    key={time.id}
                    id={time.id}
                    isSelected={time.id === selectedTime}
                    onClick={bookingTimeClick}
                    time={time.time}
                    />
                ))}
            </div>
        </div>
    </>
}
