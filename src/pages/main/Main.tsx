import './Main.css'
import { ImageSwitch } from '../../components/main/image-switch-button/ImageSwitch'
import { useState } from 'react';
import { ImageIndicator } from '../../components/main/image-indicator/ImageIndicator'


export type ImageSelector = {
    id : number;
    url : string;
}

interface CSSProperties {
  [key: string]: string | number;
}

export function Main() {

     const [activeIndex, setActiveIndex] = useState(0);

    const quotes: string[] = [
      "\"Stunningly beautiful designs!\" - ✰✰✰✰",
      "\"World class tailorship\" - ✰✰✰✰✰",
      "\"Incredibe precision and attention to detail!\" - ✰✰✰✰✰",
      "\"Spectacular!\" - ✰✰✰✰✰"
    ];

    const images: string[] = [
      "../../images/img1.jpg",
      "",
      "",
      ""
    ];


    const imageSelector: ImageSelector[] = [
        {id: 0, url: require("../../images/suits2.jpg")},
        {id: 1, url: require("../../images/suits4.jpg")},
        {id: 2, url: require("../../images/suits3.jpg")},
        {id: 3, url: require("../../images/suits1.jpg")},
    ];

    const styles: CSSProperties = {
        backgroundImage: `url(${imageSelector[activeIndex].url})`,
    };

    function switchIndex(n : number):void {

        if(activeIndex === 0 && n === -1) {
            setActiveIndex(images.length-1)
        } else if (activeIndex === images.length-1 && n === 1) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndex + n)
        }
        console.log(activeIndex)
    }

    const bookNow = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        window.location.href = "/experts";
    }

    return <>
        <div className="main">
            <div className="image-box">
                <div className="image-box-image" style={styles}></div>
                <div className="image-switch-button-wrapper">
                    <div className="image-switch-button-right">
                        <ImageSwitch sign={">"} change={1} switchIndex={switchIndex}/>
                    </div>
                    <div className="image-switch-button-left">
                        <ImageSwitch sign={"<"} change={-1} switchIndex={switchIndex} />
                    </div>
                </div>
            </div>
            <div className="info-section">
                <div className="info-section-quote">
                        <div>
                        {quotes[activeIndex]}
                        </div>
                </div>
                <div className="info-section-image-indicator">
                    <div className="info-section-island">
                        {imageSelector.map((selector) => (
                            <ImageIndicator key={selector.id} selectorState={activeIndex === selector.id}/>
                        ))}
                    </div>
                </div>
                <div className="info-section-quote">
                    <div className="logo">
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <div className="bottom-section-left">
                    <div>
                    1
                    </div>
                    <div>
                    1.2
                    </div>
                </div>

                <div className="bottom-section-right">
                    <div className="bottom-info-top">
                    8:30 AM TO 5:30PM <br/>
                    MONDAY - SATURDAY <br/>
                    <br/>
                    </div>
                    <div className="bottom-info-middle">
                    Appointments
                    </div>
                    <div className="bottom-info-bottom">
                    Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint non proident, sunt in culpa qui officia deserunt mollit anim id est laboru
                    <br/>
                    </div>
                    <div className="bottom-section-book-button">
                        <div onClick={bookNow} className="bottom-section-book-text">
                            BOOK NOW
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
