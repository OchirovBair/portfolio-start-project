import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Menu} from '../../../components/menu/Menu';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Work} from './work/Work';
import photo1 from '../../../assets/images/project-1_1.webp'
import photo2 from '../../../assets/images/project-2_1.webp'

const worksItems = ['all', 'landing page', 'react', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu items={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={'Social Network'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                      src={photo1}
                />
                <Work title={'Timer'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                      src={photo2}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #63d956;
`