import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icons/Icon';
import {theme} from '../../../styles/Theme';
import {Container} from '../../../components/Container';


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Name>Svetlana</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'instagramSvg'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'telegramSvg'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'vkSvg'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'linkedInSvg'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <CopyRight>© 2023 Svetlana Dyablo, All Rights Reserved.</CopyRight>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const CopyRight = styled.small`
    opacity: 0.5;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`

const Name = styled.span`
    color: ${theme.colors.font};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        background-color: ${theme.colors.accent};
        transform: translateY(-5px);
    }
`

