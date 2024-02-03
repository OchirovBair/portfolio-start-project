import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../FlexWrapper';

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
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
    background-color: #c639ef;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`

`

const Text = styled.p`

`

const Name = styled.span`

`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: aqua;
        margin: 5px;
    }
`