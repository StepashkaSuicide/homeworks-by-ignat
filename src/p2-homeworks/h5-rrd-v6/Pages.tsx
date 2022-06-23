import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import HW1 from '../h1/HW1';
import HW2 from '../h2/HW2';
import HW3 from '../h3/HW3';
import HW4 from '../h4/HW4';
import {Junior} from './pages/Junior';
import {JuniorHigh} from './pages/JuniorHigh';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    path: '/pre-junior'
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
                <Route path={'/junior'} element={<Junior/>}/>
                <Route path={'/juniorhigh'} element={<JuniorHigh/>}/>
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
