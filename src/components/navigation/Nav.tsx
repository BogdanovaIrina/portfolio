import React from 'react';
import s from './Nav.module.scss';

export const Nav = () => {
    return (
        <nav className={s.main}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
        </nav>
    )
}