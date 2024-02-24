import React from 'react';
import {Logo} from '../../components/logo/Logo';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Style'

const items = ['Home', 'Skills', 'Work', 'Testymony', 'Contact']

export const Header:React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu items={items}/> : <DesktopMenu items={items}/>}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


