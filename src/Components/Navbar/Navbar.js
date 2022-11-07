import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection, Anchor, UlList, ListItem, Logo, LogoText } from './Style.js'
const Navbar = () => {
    return (
        // <div>
        //     <Link to="/">Home </Link>
        //     <Link to="/contact"> Contact</Link>
        // </div>

        <NavbarSection>

            <div className="container">

                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>



                <UlList>
                    <ListItem><Anchor to="/">Home</Anchor></ListItem>
                    <ListItem><Anchor to="#">Work</Anchor></ListItem>
                    <ListItem><Anchor to="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor to="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor to="#">About</Anchor></ListItem>
                    <ListItem><Anchor to="/contact">Contact</Anchor></ListItem>
                </UlList>

            </div>

        </NavbarSection>

    );
}

export default Navbar;
