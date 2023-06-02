import "./Booking.css"
import { useState } from 'react';
import { BookingStage } from "../../components/booking/booking-stage/BookingStage"
import {StageOne} from "../../components/booking/stages/stage-one/StageOne"
import {StageTwo} from "../../components/booking/stages/stage-two/StageTwo"

type Stage = {
    id: number,
    name: string,
    description: string,
    completed: boolean,
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

    const [currentStage, setCurrentStage] = useState<Stage>(stages[0]);
    const [contButtonText, setContButtonText] = useState<string>("CONTINUE");

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (currentStage.id > stages.length-2) {
            setContButtonText("COMPLETE")
            return
        }
        setCurrentStage(stages[currentStage.id + 1])
    };


    const renderComponent = () => {
        switch(currentStage.id) {
            case 0:
                return <StageOne />;
            default:
                return <StageTwo />;
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
                <div className="booking-bottom-button">
                    <div onClick={handleClick} className="booking-bottom-button-text">
                        {contButtonText}
                    </div>
                </div>
            </div>
        </div>
    </>

}
