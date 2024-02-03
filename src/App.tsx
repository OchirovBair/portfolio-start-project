import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {Skills} from './layout/sections/skills/Skills';
import {Works} from './layout/sections/works/Works';
import {Testimony} from './layout/sections/testimony/Testimony';
import {Contacts} from './layout/sections/contacts/Contacts';
import React from 'react';
import {Slogan} from './layout/sections/slogan/Slogan';
import {Footer} from './layout/sections/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;



/*
* 1) в записях было сказано про компонент или второй вариант. Нужно выбирать делать из расчета, если один тег возвращается то будет второй вариант, если более то компонент.
* 2) Почему в секции Main используется тег div, а не тег section в StyledMain?
* */
