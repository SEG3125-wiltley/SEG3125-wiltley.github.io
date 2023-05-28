import './Main.css'
import { ImageSwitch } from '../../components/main/image-switch-button/ImageSwitch'
import { useState } from 'react';
import { ImageIndicator } from '../../components/main/image-indicator/ImageIndicator'


export type ImageSelector = {
    id : number;
}

export function Main() {

     const [activeIndex, setActiveIndex] = useState(0);

    const quotes: string[] = [
      "\"Stunningly beautiful designs!\" - ✰✰✰✰",
      "\"World class tailorship\" - ✰✰✰✰✰",
      "Incredibe precision and attention to detail!\" - ✰✰✰✰✰"
    ];

    const images: string[] = [
      "",
      "",
      "",
      ""
    ];

    const imageSelector: ImageSelector[] = [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
    ];

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


    return <>
        <div className="main">
            <div className="image-box">


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
                    {quotes[1]}
                </div>
                <div className="info-section-image-indicator">
                    <div className="info-section-island">
                        {imageSelector.map((selector) => (
                            <ImageIndicator key={selector.id} selectorState={activeIndex === selector.id}/>
                        ))}
                    </div>
                </div>
                <div className="info-section-quote">
                    "OKAY YOU DON"T NEED"
                </div>
            </div>

            <div className="bottom-section">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    </>
}
