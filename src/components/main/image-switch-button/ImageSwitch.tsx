import './ImageSwitch.css'

interface props {
    sign: string, // defines whether this button is on the right, otherwise it's on the left
    change: number,
    switchIndex: Function;
}

export function ImageSwitch (props : props) {

    function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault()
        props.switchIndex(props.change)
    }

    return <>
        <div onClick={onClick} className="image-switch-button-circle">
            <div className="image-switch-button-text">
                {props.sign}
            </div>
        </div>
    </>

}
