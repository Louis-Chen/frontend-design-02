import React from 'react'

import { createGlobalStyle } from 'styled-components'

import { SectionsContainer, Section } from 'react-fullpage'

import { Nav, Logo, MenuItem, Menu } from './components/Nav'
import { SliderOne } from './components/SliderOne'
import { SliderTwo } from './components/SliderTwo'
import { SliderThree } from './components/SliderThree'
import Kawasaki from './assets/kawasaki.svg'
import ReactSVG from 'react-svg'

import './App.css'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to right,#2B3132,black);
    font-family:"Roboto";
  }
`
let options = {
    activeClass: 'active', // the class that is appended to the sections links
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: 'SectionContainer', // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: 'Section', // the section class name
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: true, // align the content of each section vertical
}
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

            <SectionsContainer {...options}>
                <Section>
                    <SliderOne />
                </Section>
                <Section>
                    <SliderTwo />
                </Section>
                <Section>
                    <SliderThree />
                </Section>
            </SectionsContainer>
        </React.Fragment>
    )
}

export default App
