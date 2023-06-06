import './Expert.css'

interface CSSProperties {
  [key: string]: string | number;
}

interface ExpertProps {
  details: {
    name: string;
    expertise: string;
    description: string;
    image: string;
  };
  setExpert: Function;
}

export function Expert(props : ExpertProps) {

    const styles: CSSProperties = {
      backgroundImage: `url(${props.details.image})`,
    };

    const setExpertNameAndRedirect = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        localStorage.setItem("name", props.details.name);
        window.location.href = "/bookings";
    }

    return <>
        <div onClick={setExpertNameAndRedirect} className="expert-box">
            <div className="expert-image-section" style={styles}>
                    <img src={"../../../public/businesscasual.png"} alt="Expert" />
            </div>
            <div className="expert-box-info-section">
                <div className="expert-info-text">

                    <div>
                        <div className="expert-info-tag">Name:</div>
                        <div className="expert-info-info"> {props.details.name}</div>

                    </div>
                    <div>
                        <div className="expert-info-tag">Expertise:</div>
                        <div className="expert-info-info"> {props.details.expertise}</div>
                    </div>
                    <div>
                        <div className="expert-info-tag">Description:</div>
                        <div className="expert-info-info"> {props.details.description}</div>
                    </div>
                </div>

            </div>
        </div>
    </>

}
