import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";

export const MobileMenu:React.FC<{items: Array<string>}> = (props: {items: Array<string>}) => {
    const [isOpen, setIsOpen] = useState(false)
    const burgerButtonHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={burgerButtonHandler}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isOpen} onClick={()=>setIsOpen(false)}>
                <Menu items={props.items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


