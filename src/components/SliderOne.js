import React from 'react'
import styled from 'styled-components'

export const SideOneImg = styled.div`
    background-image: url('./assets/bikeOne.svg');
    background-position: center;
`

export const SideOneContent = styled.div`
    float: right;
    right: 50px;

    max-width: 600px;
`
export const SideOneHeader = styled.h1`
    color: #64d130;
    font-size: 42px;
    font-style: bold;

    &:after{
        content:'${props => props.content}';
    }
`
export const SideOneSubTitle = styled.h2`
    color: #ffffff;
    font-size: 24px;
    font-style: bold;

    &:after{
        content:'${props => props.content}';
    }
`

export const SideOnePragrapth = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-weight: lighter;
`

export const SideOneIntro = styled.div`
    position: relative;
    bottom: 20px;
    left: 20px;
`
export const SideOneIntroItem = styled.a`
  
    color: #ffffff;
    font-size: 16px;
    font-style: bold;
    padding-left:2rem;
    &:after{
        content:'${props => props.content}';
    }

`
