import React from 'react';
import s from './Footer.module.css'
import src from './../../images/facebook.png'

export const Footer = () => {
    return (
        <div className={s.main}>
                <h2>Irina Bogdanova</h2>
            <div className={s.social}>
                <a href=""><img src={src} alt=""/></a>
                <a href=""><img src={src} alt=""/></a>
                <a href=""><img src={src} alt=""/></a>
                <a href=""><img src={src} alt=""/></a>
            </div>
                <p>Copyright © 2022. All Rights Reserved.</p>
        </div>
    )
}