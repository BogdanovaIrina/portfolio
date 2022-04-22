import React from 'react';
import s from './Project.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons';

type PropsType = {
    title: string
    descr: string
    style:any
}

export const Project = ({title, descr, style}:PropsType) => {
    return (
        <div className={s.icon} style={style}>
            <div className={s.main}>
                <div className={s.text}>
                    <div className={s.link}>
                        <a href="">
                            <FontAwesomeIcon icon={faLink}/>
                        </a>
                    </div>
                    <div className={s.subtext}>
                        <h3>{title}</h3>
                        <span>{descr}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}