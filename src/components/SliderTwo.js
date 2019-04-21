import React from 'react'
import styled from 'styled-components'
import Bike from '../assets/bikeSide.png'

const MotoImg = styled.img`
    float: right;
    height: 500px;
    right: 20px;
`

const MotoContent = styled.div`
    float: left;
    top: 20px;
    margin: 0 auto;
    max-width: 450px;
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
const MotoHeightLine = styled.b`
    color: #64d130;
    font-size: 18px;
    font-style: bold;

    &:after{
        content:'${props => props.content}';
    }

`
export const SliderTwo = () => {
    return (
        <div>
            <MotoImg src={Bike} />
            <MotoContent>
                <MotoHeader content="PREMIUM PERFORMANCE" />
                <MotoPragrapth>
                    Surrounding the Ninja H2™R motorcycle’s high-output engine
                    are a multitude of premium, high-performance components,
                    selected specifically for unmatchable performance at track
                    speeds. ​​​
                </MotoPragrapth>
                <MotoPragrapth>
                    <ul style={{ fontSize: '16px', listStyleType: 'none' }}>
                        <li>
                            - Commonly found in high-performance racing
                            machines, the dog-ring transmission allows for
                            effortless, short shifts
                        </li>
                        <li>
                            - Remote shock preload adjuster makes it easy to
                            adjust settings without tools to suit rider
                            preference
                        </li>
                        <li>
                            - <MotoHeightLine content="NEW" /> for 2019, dual
                            radial-mount, opposed 4-piston Brembo Stylema® front
                            calipers grip semi-floating
                        </li>
                        <li>
                            - The star-pattern 5-spoke wheels offer optimum
                            rigidity for high-power performance
                        </li>
                    </ul>
                </MotoPragrapth>
            </MotoContent>
            <MotoIntro>
                <MotoIntroItem content="Transmission" />
                <MotoIntroItem content="Suspension" />
                <MotoIntroItem content="NEW Brakes" />
                <MotoIntroItem content="Wheels" />
            </MotoIntro>
        </div>
    )
}
