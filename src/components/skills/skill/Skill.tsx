import React from 'react';
import s from './Skill.module.css'
import src from './../../../images/icon.png'

type PropsType = {
    skillTitle: string
    skillDescription: string
}

export const Skill = (props:PropsType) => {
    return (
        <div>
            <div className={s.main}>
                <div className={s.icon}><img src={src} alt=""/></div>
                <h3>{props.skillTitle}</h3>
                <span>{props.skillDescription}</span>
            </div>
        </div>
   )
}