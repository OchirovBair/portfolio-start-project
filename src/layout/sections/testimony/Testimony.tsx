import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Icon} from '../../../components/icons/Icon';
import {Slider} from '../../../components/slider/Slider';
import {FlexWrapper} from '../../../components/FlexWrapper';



export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={'quoteSvg'}/>
                <Slider text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                        name={'@ivan ivanow'}
                />
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.div`
    background-color: #ded87c;
    height: 50vh;
`