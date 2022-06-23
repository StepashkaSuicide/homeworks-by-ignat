import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <NavLink to='/pre-junior/'>Pre Junior </NavLink>
            <NavLink to='/homeworks1/'>homeworks 1 </NavLink>
            <NavLink to='/homeworks2/'>homeworks 2 </NavLink>
            <NavLink to='/homeworks3/'>homeworks 3 </NavLink>
            <NavLink to='/homeworks4/'>homeworks 4 </NavLink>
            <NavLink to='/Junior/'>Junior </NavLink>
            <NavLink to='/JuniorHigh/'>Junior High </NavLink>
        </div>
    )
}

export default Header
