import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../FlexWrapper';
import {theme} from '../../styles/Theme';

type SliderPropsType = {
    text: string
    name: string
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>{props.text}</Text>
                    <Name>{props.name}</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`
`

const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    margin: 22px 0 34px;
    
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;    
        height: 7px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }

        &.active {
            background: ${theme.colors.accent};
            width: 20px;
        }
    }
`
