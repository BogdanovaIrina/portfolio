import React from 'react';
import s from './Project.module.css'
import src from "../../../images/bg-color.png";


type PropsType = {
    projectTitle: string
    projectDescription: string
}

export const Project = (props:PropsType) => {
    return (
        <div>
            <div className={s.main}>
                <div className={s.pos}><img className={s.icon} src={src} alt=""/><button className={s.but}>View</button></div>
                <h3>{props.projectTitle}</h3>
                <span>{props.projectDescription}</span>
            </div>
        </div>
    );
};