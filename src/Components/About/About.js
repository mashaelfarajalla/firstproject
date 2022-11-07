import React from "react";
import { AboutSection, AboutInfo, Ancoher, InfoDesc, InfoDir, InfoTitle, TitleSpan } from "./Style.js";
const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><TitleSpan>This is</TitleSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Ancoher href="#">explicabo</Ancoher> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    );
}

export default About;
