import React from 'react';
import s from './Skill.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PropsType = {
    skillTitle: string
    skillDescription: string
    icon: any
}

export const Skill = ({skillTitle, skillDescription, icon}:PropsType) => {
    return (
        <div className={s.item}>
            <div className={s.main}>
                <div className={s.wrapper}>
                    <FontAwesomeIcon className={s.icon}
                                     icon={icon}/>
                </div>
                <h3>{skillTitle}</h3>
                <span>{skillDescription}</span>
            </div>
        </div>
   )
}