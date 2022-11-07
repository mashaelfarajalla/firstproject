import React, { useState, useEffect } from "react";
import axios from "axios";

import { PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, Span, BoxImg, BoxOverlay, Img, BoxSpan } from './Style.js'
const Protfolio = () => {

    const [Images, setImages] = useState([]);
    useEffect(() => {
        axios.get('JS/data.json').then(res => { setImages(res.data.portfolio) })
    }, [])


    const PortfolioImage = Images.map(Pimg => {
        return (
            <BoxImg key={Pimg.id}>
                <Img src={Pimg.image} alt="" />
                <BoxOverlay>
                    <BoxSpan>
                        Show Image
                    </BoxSpan>
                </BoxOverlay>
            </BoxImg>
        )
    })

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>

            <div className="box">

                {PortfolioImage}

            </div>

        </PortfolioSection>
    );
}

export default Protfolio;
