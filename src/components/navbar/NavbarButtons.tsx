import './NavbarButtons.css';
import React from 'react';
import { Link } from 'react-router-dom'

interface props {
    name: string;
    link: string;
}
export function NavbarButton(props : props) {

    const onClick = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (props.name !== "") {
            window.location.href = props.link;
        }
    }

    return <>
        <div onClick={onClick} className="nav-button">
            <div className="nav-button-text">
                {props.name}
            </div>
        </div>
    </>

}
