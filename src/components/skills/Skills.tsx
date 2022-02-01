import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.main}>
            <h2>Skills</h2>
            <div className={s.skills}>
                <Skill skillTitle={'TS'} skillDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <Skill skillTitle={'React'}
                       skillDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <Skill skillTitle={'CSS'}
                       skillDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
            </div>
        </div>
    )
}

