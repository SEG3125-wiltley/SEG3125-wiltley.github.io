import './NavbarButtons.css';

interface props {
    name: string;
}
export function NavbarButton(props : props) {

    return <>
        <div className="nav-button">
            <div className="nav-button-text">
                {props.name}
            </div>
        </div>
    </>

}
