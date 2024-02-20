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
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        //outline: 1px solid red;
        margin: 0 auto 50px;
    }
`

const ListItem = styled.li`

`

