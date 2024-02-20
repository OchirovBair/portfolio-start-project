import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Icon} from '../../../components/icons/Icon';
import {Slider} from '../../../components/slider/Slider';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {IconWrapper} from '../skills/skill/Skill';
import {Container} from "../../../components/Container";



export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quoteSvg'}/>
                    </IconWrapper>
                    <Slider text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                            name={'@ivan ivanow'}
                    />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    ${IconWrapper} {
        margin: 40px 0 72px;
    }
`