import React from 'react'
import styled from 'styled-components'
import Bike from '../assets/bikeCenter.png'

const MotoImg = styled.img`
    text-align:center;
    bottom: 0;
`

const MotoContent = styled.div`
    top: 20px;
    margin: 0 auto;
`
const MotoHeader = styled.h1`
    color: #64d130;
    font-size: 42px;
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

export const SliderThree = () => {
    return (
        <div>
            <MotoContent>
                <MotoHeader content="ADVANCED ELECTRONICS" />
                <MotoPragrapth>
                    Key enhancements bring Kawasaki Racing Team (KRT) WorldSBK
                    championship-proven electronics management technology to the
                    Ninja H2™R. This results in precise chassis orientation
                    awareness that assists riders' ability to adapt to a wide
                    range of closed-course riding conditions.​
                </MotoPragrapth>
            </MotoContent>
            <MotoImg src={Bike} />

            <MotoIntro>
                <MotoIntroItem content="Transmission" />
                <MotoIntroItem content="Suspension" />
                <MotoIntroItem content="NEW Brakes" />
                <MotoIntroItem content="Wheels" />
            </MotoIntro>
        </div>
    )
}
