import './Navbar.css';
import { NavbarButton } from './NavbarButtons';

export function Navbar() {
    return <>

        <div className="nav-main-component">
            <div className="nav-flex">
                    <NavbarButton name ="" link="/"/>
                    <NavbarButton name="" link="/"/>
                    <NavbarButton name="COLLECTIONS" link ="/"/>
                    <NavbarButton name="" link="/"/>
                    <NavbarButton name="" link="/"/>

                    <div className="nav-middle-circle"> 
                        <div className="nav-title">
                            TAILORS
                        </div>
                    </div>

                    <NavbarButton name="" link="/"/>
                    <NavbarButton name="HOME" link="/" />
                    <NavbarButton name="CONTACT US" link="/contact" />
                    <NavbarButton name="BOOK" link="/experts" />
                    <NavbarButton name="" link="/"/>
            </div>
        </div>
    </>
}
