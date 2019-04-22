import React from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Nav, Logo, MenuItem, Menu } from './components/Nav'

import Kawasaki from './assets/kawasaki.svg'
import ReactSVG from 'react-svg'

import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage'

import './App.css'

import {
    SideOneContent,
    SideOneHeader,
    SideOneSubTitle,
    SideOnePragrapth,
} from './components/SliderOne'

import {
    SliderTwoContent,
    SliderTwoHeader,
    SliderTwoPragrapth,
    SliderTwoHeightLine,
} from './components/SliderTwo'

import {
    SliderThreeContent,
    SliderThreeHeader,
    SliderThreePragrapth,
} from './components/SliderThree'

const GlobalStyle = createGlobalStyle`
  body {
    /* background: linear-gradient(to right,#2B3132,black); */
    font-family:"Roboto";
  }
`

const SliderComponent = props => {
    return <div className="section">{props.children}</div>
}

const anchors = ['firstPage', 'secondPage', 'thirdPage']

const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />

                <Nav>
                    <Logo>
                        <ReactSVG src={Kawasaki} />
                    </Logo>
                    <Menu>
                        <MenuItem content="TOP FEATURE" />
                        <MenuItem content="GALLARY" />
                        <MenuItem content="SPECS" />
                        <MenuItem content="ACCESSORIES" />
                        <MenuItem content="OFFERS" />
                        <MenuItem content="COMPARABLE MODELS" />
                    </Menu>
                </Nav>
          
            <ReactFullpage
                anchors={anchors}
                navigation
                navigationTooltips={anchors}
                onLeave={(origin, destination, direction) => {
                    console.log('onLeave event', {
                        origin,
                        destination,
                        direction,
                    })
                }}
                render={({ state, fullpageApi }) => {
                    console.log('render prop change', state, fullpageApi) // eslint-disable-line no-console
                    return (
                        <div>
                            <div className="section moto-one">
                                <SideOneContent>
                                    <SideOneHeader content="NINJA H2™R" />
                                    <SideOneSubTitle content="MSRP $55,000" />
                                    <SideOnePragrapth>
                                        The Kawasaki Ninja H2™R hypersport
                                        SideOnercycle is an engineering marvel,
                                        made possible only through the sourcing
                                        of technological expertise from multiple
                                        divisions of Kawasaki Heavy Industries,
                                        Ltd. (KHI). The result of this
                                        unprecedented collaboration is a system
                                        of carefully crafted premium components
                                        and World Superbike racing inspired
                                        next-level electronics that work in
                                        concert to create an unbelievably
                                        powerful machine—one that’s more than
                                        worthy of the legendary H2 name. ​
                                    </SideOnePragrapth>
                                </SideOneContent>
                            </div>
                            <div className="section moto-two">
                                <SliderTwoContent>
                                    <SliderTwoHeader content="PREMIUM PERFORMANCE" />
                                    <SliderTwoPragrapth>
                                        Surrounding the Ninja H2™R
                                        SliderTworcycle’s high-output engine are
                                        a multitude of premium, high-performance
                                        components, selected specifically for
                                        unmatchable performance at track speeds.
                                        ​​​
                                    </SliderTwoPragrapth>
                                    <SliderTwoPragrapth>
                                        <ul
                                            style={{
                                                fontSize: '16px',
                                                listStyleType: 'none',
                                            }}
                                        >
                                            <li>
                                                - Commonly found in
                                                high-performance racing
                                                machines, the dog-ring
                                                transmission allows for
                                                effortless, short shifts
                                            </li>
                                            <li>
                                                - Remote shock preload adjuster
                                                makes it easy to adjust settings
                                                without tools to suit rider
                                                preference
                                            </li>
                                            <li>
                                                -
                                                <SliderTwoHeightLine content="NEW" />{' '}
                                                for 2019, dual radial-mount,
                                                opposed 4-piston Brembo Stylema®
                                                front calipers grip
                                                semi-floating
                                            </li>
                                            <li>
                                                - The star-pattern 5-spoke
                                                wheels offer optimum rigidity
                                                for high-power performance
                                            </li>
                                        </ul>
                                    </SliderTwoPragrapth>
                                </SliderTwoContent>
                            </div>
                            <div className="section moto-three">
                                <SliderThreeContent>
                                    <SliderThreeHeader content="ADVANCED ELECTRONICS" />
                                    <SliderThreePragrapth>
                                        Key enhancements bring Kawasaki Racing
                                        Team (KRT) WorldSBK championship-proven
                                        electronics management technology to the
                                        Ninja H2™R. This results in precise
                                        chassis orientation awareness that
                                        assists riders' ability to adapt to a
                                        wide range of closed-course riding
                                        conditions.​
                                    </SliderThreePragrapth>
                                </SliderThreeContent>
                            </div>
                        </div>
                    )
                }}
            />
        </React.Fragment>
    )
}

export default App
