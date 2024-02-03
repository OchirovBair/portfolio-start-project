import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Icon} from '../../../components/icons/Icon';

export const Footer = () => {
    return (
        <StyledFooter>
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
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: #69d36b;
    height: 30vh;
`

const CopyRight = styled.small`

`

const Name = styled.span`

`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

