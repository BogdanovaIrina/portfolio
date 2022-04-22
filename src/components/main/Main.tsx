import React from 'react';
import s from './Main.module.scss';
import src from './../../images/photo.jpg';

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.con}>
                    <img src={src} alt=""/>
                </div>
                <div className={s.text}>
                    <p className={s.greet}>Hello, my name is</p>
                    <h1>Irina Bogdanova</h1>
                    <p className={s.bottext}>and I'm a Front-end Developer</p>
                </div>
            </div>
        </div>
    )
}