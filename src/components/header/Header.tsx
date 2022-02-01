import React from 'react';
import {Nav} from "../navigation/Nav";
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.main}>
        <Nav />
        </div>
    )
}