import React from 'react';
import styled from 'styled-components';
import {Link} from '../../../../components/Link';
import {theme} from '../../../../styles/Theme';
import {Button} from '../../../../components/Button';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=''/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;
    
    ${Link} {
        padding: 10px 0;
        
        & +  ${Link} {
            margin-left: 20px;
        }
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`
    margin: 15px 0 10px;
`

const Description = styled.div`
    padding: 25px 20px;
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            position: absolute;
            content: '';
            backdrop-filter: blur(4px);
            background: rgba(0, 0, 0, 0.3);
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
        }
        
        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }
}

`