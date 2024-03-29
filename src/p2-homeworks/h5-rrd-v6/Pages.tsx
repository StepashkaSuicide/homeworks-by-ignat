import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import HW1 from '../h1/HW1';
import HW2 from '../h2/HW2';
import HW3 from '../h3/HW3';
import HW4 from '../h4/HW4';
import {Junior} from './pages/Junior';
import {HW13} from './pages/JuniorHigh';
import HW6 from '../h6/HW6';
import HW7 from '../h7/HW7';
import HW8 from '../h8/HW8';
import HW9 from '../h9/HW9';
import HW10 from '../h10/HW10';
import HW11 from '../h11/HW11';
import HW12 from '../h12/HW12';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={'/homeworks1'} element={<HW1/>}/>
                <Route path={'/homeworks2'} element={<HW2/>}/>
                <Route path={'/homeworks3'} element={<HW3/>}/>
                <Route path={'/homeworks4'} element={<HW4/>}/>
                <Route path={'/homeworks6'} element={<HW6/>}/>
                <Route path={'/homeworks7'} element={<HW7/>}/>
                <Route path={'/homeworks8'} element={<HW8/>}/>
                <Route path={'/homeworks9'} element={<HW9/>}/>
                <Route path={'/homeworks10'} element={<HW10/>}/>
                <Route path={'/homeworks11'} element={<HW11/>}/>
                <Route path={'/homeworks12'} element={<HW12/>}/>
                <Route path={'/homeworks13'} element={<HW13/>}/>
                <Route path={'/junior'} element={<Junior/>}/>
                {/*<Route path={'/juniorhigh'} element={<JuniorHigh/>}/>*/}
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
