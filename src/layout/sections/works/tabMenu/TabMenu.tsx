import React from 'react';
import styled from 'styled-components';
import {Link} from '../../../../components/Link';

type MenuPropsType = {
    items: Array<string>
}

export const TabMenu = (props: MenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.items.map((item, index) => {
                    return <ListItem key={index}><Link href="">{item}</Link></ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`

const ListItem = styled.li`

`

