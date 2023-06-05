import "./StageThree.css"
import { AlterBookingInfo } from "../../../../pages/booking/Booking"

export function StageThree(props : AlterBookingInfo) {
    return <>

        <div className="booking-details-flex-column">
            <div className="stage-three-title-text">Please fill out the following details</div>
            <div className="booking-details-inner-container">
            <div className="booking-detail-name">
                <div>First name</div>
                <input className="booking-detail-box" type="text"/>
            </div>
            <div className="booking-detail-name">
                <div>Last name</div>
                <input className="booking-detail-box" type="text"/>
            </div>

            <div className="booking-detail-name">
                <div> Home address </div>
                <input className="booking-detail-box" type="text"/>
            </div>

            <div className="booking-detail-name">
                <div> Phone #</div>
                <input className="booking-detail-box" type="text"/>
            </div>

            <div className="booking-detail-name">
                <div> Email address</div>
                <input className="booking-detail-box" type="text"/>
            </div>
            </div>
        </div>

    </>
}
