import './ImageIndicator.css';

interface props {
    selectorState: boolean;
}

export function ImageIndicator(props : props) {

    return <>

        <div className="info-section-island-image-selector">
                <div className={`info-section-island-image ${props.selectorState ? "selected" : ""}`}>
                </div>
        </div>

    </>

}
