import React from 'react';
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../title/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';

export const Skills = () => {

    return (
        <div className={s.main}>
            <Title title={'Skills'}/>
            <div className={s.skills}>
                <Skill skillTitle={'Development'}
                       skillDescription={'React/Redux/AXIOS'}
                       icon={faReact}/>
                <Skill skillTitle={'Foundation'}
                       skillDescription={'HTML5/CSS3/JavaScript/TypeScript'}
                       icon={faJsSquare}/>
                <Skill skillTitle={'Testing/Design'}
                       skillDescription={'Unit Tests/Storybook/Material UI'}
                       icon={faFileCode}/>
            </div>
        </div>
    )
}

