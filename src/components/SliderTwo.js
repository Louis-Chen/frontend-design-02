import React from 'react'
import styled from 'styled-components'

export const SliderTwoContent = styled.div`
    float:left;
    left: 50px;
    max-width: 550px;
`
export const SliderTwoHeader = styled.h1`
    color: #64d130;
    font-size: 42px;
    font-style: bold;

    &:after{
        content:'${props => props.content}';
    }
`

export const SliderTwoPragrapth = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-weight: lighter;
`

export const SliderTwoIntro = styled.div`
    float: left;
    bottom: 20px;
    left: 20px;
`
export const SliderTwoIntroItem = styled.a`
  
    color: #ffffff;
    font-size: 16px;
    font-style: bold;
    padding-left:2rem;
    &:after{
        content:'${props => props.content}';
    }

`
export const SliderTwoHeightLine = styled.b`
    color: #64d130;
    font-size: 18px;
    font-style: bold;

    &:after{
        content:'${props => props.content}';
    }

`
