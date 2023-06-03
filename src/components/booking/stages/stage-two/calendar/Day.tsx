import "./Day.css"

interface dayInfo {
    dayNumber: number;
    setSelected: Function;
    isSelected: boolean;
}

export function Day(props : dayInfo) {

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        props.setSelected(props.dayNumber)
    }

    return <>
        <div onClick={handleClick} className={`day-circle ${props.isSelected ? "activated" : ""}`}>
            <div className="day-number-text">
                {props.dayNumber}
            </div>
        </div>
    </>

}
