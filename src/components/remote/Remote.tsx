import React from 'react';
import s from './Remote.module.scss';
import {Title} from "../title/Title";

export const Remote = () => {
    return (
        <div className={s.main}>
            <div className={s.wrapper}>
                <div className={s.title}>
                    <Title title={'Looking into remote work'}/>
                </div>
                <div className={s.wrapbtn}>
                    <input className={s.btn} type='submit' value='Hire me'/>
                </div>
            </div>
        </div>
    )
}