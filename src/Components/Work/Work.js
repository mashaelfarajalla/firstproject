import axios from "axios";
import React, { Component } from "react";
import { WorkSection, Icon, WorkPart, WorkTitle, Span, PartDesc, PartLine, PartTitle, } from './Style.js'
class Work extends Component {

    state = {
        works: []
    }

    componentDidMount() {
        axios.get('JS/data.json').then(res => {
            this.setState({
                works: res.data.works
            })
        })
    }




    render() {
        const { works } = this.state;
        const WorkList = works.map((work) => {
            return (
                <WorkPart first={work.id} key={work.id}>
                    <Icon className={work.icon_name}></Icon>
                    <PartTitle>{work.title}</PartTitle>
                    <PartLine />
                    <PartDesc>{work.body}</PartDesc>
                </WorkPart>
            )
        });

        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>


                    {WorkList}

                </div>
            </WorkSection>
        )
    };
}

export default Work;
