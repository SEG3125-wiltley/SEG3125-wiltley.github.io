import "./StageOne.css"
import { Service } from "./services/Service"
import { AlterBookingInfo } from "../../../../pages/booking/Booking"

export function StageOne(props : AlterBookingInfo) {

    return <>

        <div className="stage-one-flex-column">
            <div className="stage-one-title-text">Select one or more services</div>
            <Service bookingInfo={props} name="Bring Your Own" description="We will tailor any garment you bring in for us to fit your measurements. Alternatively, we also offer repairment services." price="~500"/>
            <Service bookingInfo={props} name="Ready-to-Wear" description="Pieces that can be found in our regular collections. Services include the taking of measurements to ensure they fit you perfectly." price="600~1500"/>
            <Service bookingInfo={props} name="Customized Collections" description="Chosen from the templates in our collections, these garments will be crafted from the ground up with colors and fabrics of your choosing." price="1000~3000"/>
            <Service bookingInfo={props} name="Full Custom Design" description="Designed by our most elite tailors, these suits and garments have been worn by celebrities to the most prestegious of events including the Met Gala, the Oscars, and various high profile events throughout the world." price="Requires Estimate "/>
        </div>
    </>
}
