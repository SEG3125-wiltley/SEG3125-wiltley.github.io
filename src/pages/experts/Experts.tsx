import "./Experts.css"
import { Expert } from "../../components/expert/Expert"
import { SetExpert } from "../../App"


interface ExpertDetails {
    name: string;
    expertise: string;
    description: string;
    image: string;
}



export function Experts(props : SetExpert) {

    const expertList: ExpertDetails[] = [
        {
            name: 'Shelly',
            expertise: "Woman's tailorship & fashion",
            description: "ok",
            image: '../../../public/businesswoman.jpg',
        },
        {
            name: 'Jackson',
            expertise: 'Data Science',
            description: 'I specialize in machine learning and data analysis...',
            image: 'path/to/image2.jpg',
        },
        {
            name: 'Brian',
            expertise: 'Data Science',
            description: 'I specialize in machine learning and data analysis...',
            image: 'path/to/image2.jpg',
        },
    ];

    return <>
        <div className="expert-flex">
            <div className="experts-background-image">
                {expertList.map((expert, index) => (
                    <Expert key={index} details={expert} setExpert={props.setExpert}  />
                ))}

            </div>
        </div>
        <div className="expert-bottom-section">
            <div className="expert-bottom-section-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
        </div>
    </>

}
