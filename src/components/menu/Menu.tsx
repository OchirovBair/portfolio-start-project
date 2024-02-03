import React from 'react';
import styled from 'styled-components';

type MenuPropsType = {
    items: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledNav>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}><a href="">{item}</a></li>
                })}
            </ul>
        </StyledNav>
    );
};


const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`