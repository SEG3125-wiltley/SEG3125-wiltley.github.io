import "./BookingStage.css"


export interface StageInfo {
    id: number;
    name: string;
    description: string;
    current: boolean;
    complete: boolean;
    setStage: Function;
}

export function BookingStage (props: StageInfo) {

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        props.setStage(props.id)
    };

    return <>
        <div className={`booking-stage-flex ${props.current ? "activated" : ""}`}>
            <div className="booking-stage-main-text">
                {props.name}&nbsp;-&nbsp;
            </div>
            <div onClick={handleClick} className={`booking-stage-edit-button ${props.complete ? "complete" : ""}`}>
                <div className={`booking-stage-no-underline ${props.complete ? "complete" : ""}`}>
                &nbsp;-&nbsp;
                </div>
                edit
            </div>

            <div className={`booking-stage-details-text ${props.current ? "activated" : ""}`}>
                {props.description}
            </div>
        </div>
    </>

}
