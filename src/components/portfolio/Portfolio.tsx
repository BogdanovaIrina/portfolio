import React from 'react';
import s from './Portfolio.module.scss'
import {Project} from "./project/Project";
import {Title} from "../title/Title";
import todo from "../../images/todo.jpg";
import soc from "../../images/social.jpg";
import pro from "../../images/project.jpg";
import fu from "../../images/future.jpg";

export const Portfolio = () => {

    const todolist = {backgroundImage: `url(${todo})`}
    const social = {backgroundImage: `url(${soc})`}
    const project = {backgroundImage: `url(${pro})`}
    const future = {backgroundImage: `url(${fu})`}

    return (
        <div className={s.main}>
            <Title title={'My Portfolio'}/>
            <div className={s.portfolio}>
                <div className={s.wrapper}>
                    <div className={s.block1}>
                        <Project title={'Todolist'}
                                 descr={'TS/Redux/RestAPI/Thunk/Material UI'}
                                 style={todolist}/>
                    </div>
                    <div className={s.block2}>
                        <Project title={'Project'}
                                 descr={'A team work.'}
                                 style={project}/>
                    </div>
                    <div className={s.block3}>
                        <Project title={'Future Project'}
                                 descr={'In progress...'}
                                 style={future}/>
                    </div>

                    <div className={s.block4}>
                        <Project title={'Social Network'}
                                 descr={'TS/Redux/RestAPI/Thunk'}
                                 style={social}/>
                    </div>
                </div>
            </div>
        </div>
    )
}