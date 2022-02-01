import React from 'react';
import s from './Portfolio.module.css'
import {Project} from "./project/Project";

export const Portfolio = () => {
    return (
            <div className={s.main}>
                <h2>My Portfolio</h2>
                <div className={s.portfolio}>
                    <Project  projectTitle={'Counter'} projectDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                    <Project  projectTitle={'Social'} projectDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                </div>
            </div>
    )
}