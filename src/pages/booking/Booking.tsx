import "./Booking.css"
import { useState } from 'react';
import { BookingStage } from "../../components/booking/booking-stage/BookingStage"
import { StageOne } from "../../components/booking/stages/stage-one/StageOne"
import { StageTwo } from "../../components/booking/stages/stage-two/StageTwo"
import { StageThree } from "../../components/booking/stages/stage-three/StageThree"
import { CompletionMessage } from '../../components/booking/stages/completion/CompletionMessage'

type Stage = {
    id: number,
    name: string,
    description: string,
    completed: boolean,
}

type FullBookingInfo = {
    assistant: string;
    price: string;
    date: string;
    service: string;
}

export interface AlterBookingInfo {
    fullbookinginfo: FullBookingInfo
    alterInfo: Function;
}


export function Booking() {

    const stages: Stage[] = [
        {
            id: 0,
            name: "Stage 1",
            description: "Description of Stage 1",
            completed: false,
        },
        {
            id: 1,
            name: "Stage 2",
            description: "Description of Stage 2",
            completed: false,
        },
        {
            id: 2,
            name: "Stage 3",
            description: "Description of Stage 3",
            completed: false,
        },
    ];

    const [complete, setComplete] = useState<number>(0);
    const [currentStage, setCurrentStage] = useState<Stage>(stages[0]);
    const [contButtonText, setContButtonText] = useState<string>("CONTINUE");
    const [info, setInfo] = useState<FullBookingInfo>({
        assistant: "-",
        price: "-",
        date: "-",
        service: "-"
    });

    const alterBookingInfo = (newInfo : FullBookingInfo) => {
        console.log(newInfo.service)
        console.log(newInfo.price)
        setInfo(newInfo);
    }

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (currentStage.id > stages.length-2) {
            setComplete(1)
            setContButtonText("COMPLETE")
            return
        }
        setCurrentStage(stages[currentStage.id + 1])
    };

    const setStageManual = (id : number) => {
        setCurrentStage(stages[id])
    }


    const renderComponent = () => {
        switch(currentStage.id) {
            case 0:
                return <StageOne fullbookinginfo={info} alterInfo={alterBookingInfo}/>;
            case 1:
                return <StageTwo fullbookinginfo={info} alterInfo={alterBookingInfo}/>;
            default:
                return <StageThree fullbookinginfo={info} alterInfo={alterBookingInfo}/>
        }
    }

    const renderCompletionMessage = () =>  {
        if(complete === 1) {
            return <CompletionMessage fullbookinginfo={info} alterInfo={alterBookingInfo} />
        }
    }

    return <>
        <div className="booking-flex-stack">
            <div className="booking-flex">
                <div className="booking-island-side">
                    <div className="booking-container">
                        <div className="booking-island">
                            <div className="booking-island-center">
                                <div className="booking-island-flex">
                                    {stages.map(stage => (
                                        <BookingStage
                                        key={stage.id}
                                        id={stage.id}
                                        setStage={setStageManual}
                                        name={stage.name}
                                        description={stage.description}
                                        current={currentStage.id === stage.id}
                                        complete={currentStage.id > stage.id}
                                        />
                                  ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="booking-container"> 
                    <div className="booking-info-side">
                        {renderComponent()}
                    </div>
                </div>
            </div>

            <div className="booking-bottom-section">
                <div className="booking-totalinfo-text">
                    <div>
                    Chosen Assistant: {info.assistant}
                    </div>
                    <div>
                    Chosen Service: {info.service}
                    </div>
                    <div>
                    Price: {info.price}
                    </div>
                    <div>
                    Time: {info.date}
                    </div>

                </div>
                <div className="booking-bottom-section-flex">
                    <div className="booking-bottom-button">
                        <div onClick={handleClick} className="booking-bottom-button-text">
                            {contButtonText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {renderCompletionMessage()}
    </>

}
