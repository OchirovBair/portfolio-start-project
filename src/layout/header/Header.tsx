import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import {Menu} from '../../components/menu/Menu';

const items = ['home', 'skills', 'work', 'testymony', 'contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu items={items}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #5bbeb2;
    display: flex;
    justify-content: space-between;
`