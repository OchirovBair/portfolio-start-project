import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from '../../../components/button/Button';
import {FlexWrapper} from '../../../components/FlexWrapper';

export const Slogan = () => {
    return (
        <StyledSlogan>
            <FlexWrapper direction={'column'} align={'center'}>
                <SectionTitle>I Am Available For Freelance</SectionTitle>
                <Button>Hire me</Button>
            </FlexWrapper>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
    background-color: #f14e4e;
    height: 30vh;
    
`