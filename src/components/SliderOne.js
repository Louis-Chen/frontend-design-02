import React from 'react'
import styled from 'styled-components'
import Bike from '../assets/bike.png'

const MotoImg = styled.img`
    float: left;
    height: 500px;
    left: 20px;
    top: 20px;
`

const MotoContent = styled.div`
    float: right;
    right: 0px;
    top: 20px;
    margin: 0 auto;

    max-width: 350px;
`
const MotoHeader = styled.h1`
    color: #64d130;
    font-size: 42px;
    font-style: bold;

    &:after{
        content:'${props => props.content}';
    }
`
const MotoSubTitle = styled.h2`
    color: #ffffff;
    font-size: 24px;
    font-style: bold;

    &:after{
        content:'${props => props.content}';
    }
`

const MotoPragrapth = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-weight: lighter;
`

const MotoIntro = styled.div`
    float: left;
    bottom: 20px;
    left: 20px;
`
const MotoIntroItem = styled.a`
  
    color: #ffffff;
    font-size: 16px;
    font-style: bold;
    padding-left:2rem;
    &:after{
        content:'${props => props.content}';
    }

`
export const SliderOne = () => {
    return (
        <div>
            <MotoImg src={Bike} />
            <MotoContent>
                <MotoHeader content="NINJA H2™R" />
                <MotoSubTitle content="MSRP $55,000" />
                <MotoPragrapth>
                    The Kawasaki Ninja H2™R hypersport motorcycle is an
                    engineering marvel, made possible only through the sourcing
                    of technological expertise from multiple divisions of
                    Kawasaki Heavy Industries, Ltd. (KHI). The result of this
                    unprecedented collaboration is a system of carefully crafted
                    premium components and World Superbike racing inspired
                    next-level electronics that work in concert to create an
                    unbelievably powerful machine—one that’s more than worthy of
                    the legendary H2 name. ​
                </MotoPragrapth>
            </MotoContent>
            <MotoIntro>
                <MotoIntroItem content="Supercharger" />
                <MotoIntroItem content="Impeller" />
                <MotoIntroItem content="Planetary Gear" />
                <MotoIntroItem content="Engine" />
            </MotoIntro>
        </div>
    )
}
