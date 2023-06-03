import "./Week.css"
import { Day } from "./Day"

interface weekInfo {
    weekNumber: number,
    currentlySelected: number;
    setSelected: Function
}

export function Week(props : weekInfo) {

    const renderComponent = () => {
        const days = [];
        var start = 7 * props.weekNumber;
        for (let day = start+1; day <= start+7; day++) {
            days.push(<Day key={day} isSelected={day === props.currentlySelected} dayNumber={day} setSelected={props.setSelected}/>);
        }
        return days
    }


    return <>
        <div className="week-flex">
            {renderComponent()}
        </div>
    </>
}
