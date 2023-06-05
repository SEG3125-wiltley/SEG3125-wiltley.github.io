import "./StageOne.css"
import { Service } from "./services/Service"
import { AlterBookingInfo } from "../../../../pages/booking/Booking"

export function StageOne(props : AlterBookingInfo) {

    return <>

        <div className="stage-one-flex-column">
            <div className="stage-one-title-text">Select one or more services</div>
            <Service bookingInfo={props} name="test 1" description="description 1" price="20"/>
            <Service bookingInfo={props} name="test 2" description="description 2" price="40"/>
            <Service bookingInfo={props} name="test 3" description="description 3" price="80"/>
            <Service bookingInfo={props} name="test 4" description="description 4" price="100"/>
        </div>
    </>
}
