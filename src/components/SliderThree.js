import React from 'react'
import styled from 'styled-components'

export const SliderThreeContent = styled.div`
    top: 20px;
    width: 1250px;
    margin: 0 auto;
    text-align: center;
`
export const SliderThreeHeader = styled.h1`
    color: #64d130;
    font-size: 42px;
    font-style: bold;

    &:after{
        content:'${props => props.content}';
    }
`

export const SliderThreePragrapth = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-weight: lighter;
`

export const SliderThreeIntro = styled.div`
    float: left;
    bottom: 20px;
    left: 20px;
`
export const SliderThreeIntroItem = styled.a`
  
    color: #ffffff;
    font-size: 16px;
    font-style: bold;
    padding-left:2rem;
    &:after{
        content:'${props => props.content}';
    }

`
