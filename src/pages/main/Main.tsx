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
      "\"Stunningly beautiful designs!\" - ✰✰✰✰✰",
      "\"World class tailorship!\" - ✰✰✰✰✰",
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
                    <div className="bottom-info-top">
                    Who we are? <br/>
                    </div>
                    <div className="bottom-info-middle">
                    Style. Class. Comfort.
                    </div>
                    <div className="bottom-info-bottom">
                    <br/>
                    Here at Tailors, with our skilled team of experienced tailors, we strive to provide our valued customers with personalized and exquisite clothing. From bespoke suits to elegant dresses, we meticulously craft each garment to ensure a perfect fit and impeccable attention to detail. We understand that style goes beyond fashion trends. We believe in creating timeless pieces that reflect your unique personality and individuality. Our artisans carefully select high-quality fabrics and employ innovative techniques to bring your vision to life, resulting in garments that exude elegance and sophistication.
                    <br/>
                    </div>
                </div>

                <div className="bottom-section-right">
                    <div className="bottom-info-top">
                    8:30 AM TO 7:30PM <br/>
                    MONDAY - SATURDAY <br/>
                    <br/>
                    </div>
                    <div className="bottom-info-middle">
                    Appointments
                    </div>
                    <div className="bottom-info-bottom">
                    Our booking hours are from 8:30 am to 7:30 pm, ensuring that we accommodate your schedule. Whether you're an early riser or prefer an afternoon appointment, we have flexible time slots available to suit your needs.
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
