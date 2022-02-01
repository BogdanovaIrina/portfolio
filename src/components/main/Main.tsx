import React from 'react';
import s from './Main.module.css'
import src from './../../images/photo.jpg'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.text}>
                    <p className={s.greeting}>Hi everyone!</p>
                    <h1>Irina Bogdanova</h1>
                    <p>Frontend Developer</p>
                </div>
                <div>
                    <img src={src} alt=""/>
                </div>
            </div>

        </div>
    )
}