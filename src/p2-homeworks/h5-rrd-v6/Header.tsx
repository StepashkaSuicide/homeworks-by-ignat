import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div>
            <NavLink className={({ isActive }) =>isActive ? s.active : s.navlink} to='/pre-junior/'>Pre Junior </NavLink>
            <NavLink className={({ isActive }) =>isActive ? s.active : s.navlink} to='/homeworks1/'>Homeworks 1 </NavLink>
            <NavLink className={({ isActive }) =>isActive ? s.active : s.navlink} to='/homeworks2/'>Homeworks 2 </NavLink>
            <NavLink className={({ isActive }) =>isActive ? s.active : s.navlink} to='/homeworks3/'>Homeworks 3 </NavLink>
            <NavLink className={({ isActive }) =>isActive ? s.active : s.navlink} to='/homeworks4/'>Homeworks 4 </NavLink>
            <NavLink className={({ isActive }) =>isActive ? s.active : s.navlink} to='/homeworks6/'>Homeworks 6 </NavLink>
            <NavLink className={({ isActive }) =>isActive ? s.active : s.navlink} to='/Junior/'>Junior </NavLink>
            <NavLink className={({ isActive }) =>isActive ? s.active : s.navlink} to='/JuniorHigh/'>Junior High </NavLink>
        </div>
    )
}

export default Header
