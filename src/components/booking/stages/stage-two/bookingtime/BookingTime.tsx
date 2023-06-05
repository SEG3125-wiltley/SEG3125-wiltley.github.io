import "./BookingTime.css"

interface timeInfo {
    id: number;
    onClick: Function;
    isSelected: boolean;
    time: string;
}

export function BookingTime(props : timeInfo) {

    const onClick = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log(props.id)
        props.onClick(props.id)
    }

    return <>
        <div onClick={onClick} className={`bookingtime-box ${props.isSelected ? "activate" : ""}`}>
            <div className="bookingtime-text">
                {props.time}
            </div>
        </div>
    </>

}
