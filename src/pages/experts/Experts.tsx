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
            name: 'Daniel Walker',
            expertise: "The Classic Maestro",
            description: "With two decades of experience in the industry, Daniel Walker is our seasoned expert renowned for his mastery of classic tailoring. He specializes in creating timeless pieces that exude sophistication and elegance. Daniel has an impeccable eye for detail, ensuring that every stitch and measurement is precise.",
            image: require('../../images/dani.png'),
        },
        {
            name: 'Shannon Sharpe',
            expertise: 'The Overlord',
            description: '"The Overlord" commands an army of tailor apprentices who marvel at his mastery, striving to absorb even a fraction of his unparalleled talent. His name echoes through the hallowed halls of fashion, striking both admiration and fear in the hearts of his competitors. The mere mention of his nickname sends a shiver down the spines of fashionistas worldwide, as they anticipate the next awe-inspiring masterpiece he will unleash upon the runway.',
            image: require('../../images/sharpe.png'),
        },
        {
            name: 'Sophia Anderson',
            expertise: ' The Contemporary Trendsetter',
            description: 'Sophia Anderson is our expert in contemporary fashion, always at the forefront of the latest trends and styles. With an eye for modern aesthetics and a deep understanding of fabric draping and innovative techniques, Sophia can craft garments that effortlessly blend style and comfort. She excels in designing chic, ready-to-wear clothing that appeals to those seeking a contemporary and fashion-forward look.',
            image: require('../../images/sophia.jpeg'),
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
                Each of our experts brings their own distinct perspective and skill set to our tailor shop, ensuring that we can cater to a wide range of preferences and tastes. They are passionate about their craft and dedicated to delivering exceptional results that exceed your expectations. Whether you lean towards classic, couture, or contemporary fashion, our experts will guide you through the design process, offering personalized advice and attention to detail every step of the way.
            </div>
        </div>
    </>

}
