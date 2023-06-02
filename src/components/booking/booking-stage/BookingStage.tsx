import "./BookingStage.css"
import { useState } from 'react';


interface StageInfo {
    name: string;
    description: string;
    current: boolean;
    complete: boolean;
}

export function BookingStage (props: StageInfo) {

    const [isBoolean, setIsBoolean] = useState<boolean>(false);

    return <>
        <div className={`booking-stage-flex ${props.current ? "activated" : ""}`}>
            <div className="booking-stage-main-text">
                {props.name}
            </div>
            <div className={`booking-stage-details-text ${props.current ? "activated" : ""}`}>
                {props.description}
            </div>
        </div>
    </>

}
