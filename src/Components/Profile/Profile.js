import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    ProfileSection, ProfileDiv, Title, TitleSpan, ProfileList,
    ProfileItem, Span, SpanWeb,
    SkillsDiv, SkillsDesc, SkillsBar, BarTitle, BarParent, BarPerc, BarParentSpan
} from './Style.js'
const Profile = () => {

    const [skills, setSkills] = useState([]);
    useEffect(() => {
        axios.get('JS/data.json').then(res => { setSkills(res.data.profile) })
    }, [])

    const SkillsList = skills.map(skill => {
        return (
            <SkillsBar key={skill.id}>
                <BarTitle>{skill.title}</BarTitle>
                <BarPerc>{skill.perc}</BarPerc>
                <BarParent>
                    <BarParentSpan style={{ width: `${skill.perc}` }}></BarParentSpan>
                </BarParent>
            </SkillsBar>
        )
    })

    return (
        <ProfileSection>
            <div className="container">
                <ProfileDiv>
                    <Title><TitleSpan>My </TitleSpan>Profile</Title>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileDiv>

                <SkillsDiv>
                    <Title>Some <TitleSpan>skills</TitleSpan></Title>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {SkillsList}

                </SkillsDiv>

            </div>
        </ProfileSection>
    );
}

export default Profile;
