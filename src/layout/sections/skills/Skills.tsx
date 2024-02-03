import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icons/Icon';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wpar={'wrap'} justify={'space-between'}>
                <Skill iconId={'codeSvg'}
                       title={'html5'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                />
                <Skill iconId={'cssSvg'}
                       title={'css3'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                />
                <Skill iconId={'reactSvg'}
                       title={'React'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                />
                <Skill iconId={'styledCompSvg'}
                       title={'styled components'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                /><Skill iconId={'typeScriptSvg'}
                       title={'typescript'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                /><Skill iconId={'figmaSvg'}
                       title={'WEB DESIgN  '}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #e76a6a;
    min-height: 100vh;
`
