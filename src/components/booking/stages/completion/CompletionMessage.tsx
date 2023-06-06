import "./CompletionMessage.css"
import { AlterBookingInfo } from '../../../../pages/booking/Booking'

export function CompletionMessage(props : AlterBookingInfo) {

    const onClick = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        localStorage.removeItem("name");
        window.location.href = "/";
    }

    return <>
        <div className="completion-dim-box">
            <div className="completion-inner-box">
                <div className="completion-flex-box">
                    <div className="completion-check-box"> </div>
                    <div className="completion-box-bold-text">
                        Booking was completed successfully!
                    </div>
                    <div>
                        A confirmation with the following details was sent to your email:
                    </div>
                    <div>
                    Assistant: {props.fullbookinginfo.assistant}&nbsp;
                    Service: {props.fullbookinginfo.service}&nbsp;
                    Price: {props.fullbookinginfo.price}&nbsp;
                    Date: {props.fullbookinginfo.date}&nbsp;
                    </div>
                    <div> 
                        For further inquiries you may reach us at 888 - 888 -8888
                    </div>

                    <div onClick={onClick} className="completion-box-button">
                        Go Home
                    </div>
                </div>
            </div>
        </div>
    </>
}
