import './Navbar.css';
import { NavbarButton } from './NavbarButtons';

export function Navbar() {
    return <>
        <div className="nav-main-component">
            <div className="nav-flex">
                    <NavbarButton name = ""/>
                    <NavbarButton name="COLLECTIONS"/>
                    <NavbarButton name=""/>

                    <div className="nav-middle-circle"> 
                        <div className="nav-title">
                            TAILORS
                        </div>
                    </div>

                    <NavbarButton name="HOME" />
                    <NavbarButton name="CONTACT US"/>
                    <NavbarButton name="ABOUT US"/>
            </div>
        </div>
    </>
}
