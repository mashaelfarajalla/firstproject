import React from "react";
import { HomeTitle, HomeInformation, HomeInfo, HomeDesc, Span, Btn, HomeSection } from './Style.js'
const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Hamza Nabil</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <Btn>Let's Begin</Btn>
                </HomeInformation>
            </div>
        </HomeSection>
    );
}

export default Home;
