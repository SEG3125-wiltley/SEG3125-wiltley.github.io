import "./Service.css"
import { useState } from 'react'

interface service {
    name: string;
    description: string;
    price: string;
}

export function Service(props: service) {

    const [selected, setSelected] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (selected === false) {
            setSelected(true);
        } else {
            setSelected(false);
        }

    }

    return <>
        <div className="service-box">
            <div className="service-box-text-area">
                <div className="service-price-text"> 
                    {props.price}$&emsp;-&emsp;
                </div>

                <div className="service-name-text"> 
                    {props.name}
                </div>
                <div className="service-description-text">
                    {props.description}
                </div>
            </div>
            <div className="service-box-button-area">
                <div onClick={handleClick} className={`service-selection-box ${selected ? 'selected' : ''} `}>
                    ✓
                </div>
            </div>
        </div>
    </>

}
