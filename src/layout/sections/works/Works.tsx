import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {TabMenu} from './tabMenu/TabMenu';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Work} from './work/Work';
import photo1 from '../../../assets/images/project-1_1.webp'
import photo2 from '../../../assets/images/project-2_1.webp'
import {Container} from '../../../components/Container';

const worksItems = ['all', 'landing page', 'react', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wpar='wrap'>
                    <Work title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                          src={photo1}
                    />
                    <Work title={'Timer'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim'}
                          src={photo2}
                    />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
        
        @media (max-width: 776px) {
            justify-content: center;
        }
    }
`
