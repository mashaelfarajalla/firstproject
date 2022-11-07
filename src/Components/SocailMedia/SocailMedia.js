import React, { Component } from "react";
import axios from "axios";
import { SocialP, Social, SocialIcon, SocialInfo1, SocialInfo2, SocialMediaSection } from './style.js'
class SocailMedia extends Component {

    state = {
        Socails: []
    }


    componentDidMount() {
        axios.get('JS/data.json').then(res => {
            this.setState({
                Socails: res.data.social
            })
        })
    }

    render() {
        const { Socails } = this.state;
        const SocailList = Socails.map(social => {
            return (
                <Social key={social.id} item={social.id}>
                    <SocialIcon className={social.icon}></SocialIcon>
                    <SocialP>
                        <SocialInfo1>{social.title}</SocialInfo1>
                        <SocialInfo2>{social.body}</SocialInfo2>
                    </SocialP>
                </Social>
            )
        })

        return (
            <SocialMediaSection>

                {SocailList}
            </SocialMediaSection>

        );
    }
}

export default SocailMedia;
