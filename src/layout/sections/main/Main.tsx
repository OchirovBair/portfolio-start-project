import React from 'react';
import photo from '../../../assets/images/main-photo.jpg'
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainFlexWrapper justify='space-between' align='center'>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Svetlana Dyablo</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt={'mainPhoto'}/>
                    </PhotoWrapper>
                </MainFlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #4d75e5;
    display: flex;
    //align-items: center;
`

const MainFlexWrapper = styled(FlexWrapper)`
    @media (max-width: 1000px) {
        justify-content: center;
        flex-direction: column;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        border: 5px solid ${theme.colors.accent};
        width: 360px;
        height: 470px;

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -20px;
            left: 17px;
        }
        
        // @media ${theme.media.mobile} {
        //     margin-top: 65px;
        // }
    }

    @media (max-width: 1000px) {
        margin-top: 65px;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    ${font({
        weight: 400,
        Fmin: 20,
        Fmax: 27,
    })}
`

const Name = styled.h2`
    ${font({
        family: "'Josefin Sans', sans-serif;",
        weight: 700,
        Fmin: 36,
        Fmax: 50,
    })}
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
            //transform: translateY(200%);
        }
    }
    
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`



