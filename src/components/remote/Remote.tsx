import React from 'react';
import s from './Remote.module.css'

export const Remote = () => {
    return (
        <div className={s.main}>
            <h2>Looking into remote work</h2>
            <button className={s.btn}>
                <span>Hire me</span>
            </button>
        </div>
    )
}