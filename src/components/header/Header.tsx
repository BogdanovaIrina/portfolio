import React from 'react';
import {Nav} from "../navigation/Nav";
import s from './Header.module.scss';

export const Header = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <Nav/>
            </div>
        </div>
    )
}