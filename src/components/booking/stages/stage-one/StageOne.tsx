import "./StageOne.css"
import { Service } from "./services/Service"

export function StageOne() {

    return <>

        <div className="stage-one-flex-column">
            <div className="stage-one-title-text">Select one or more services</div>
            <Service name="test 1" description="description 1" price="20"/>
            <Service name="test 2" description="description 2" price="40"/>
            <Service name="test 3" description="description 3" price="80"/>
            <Service name="test 4" description="description 4" price="100"/>
        </div>
    </>
}
