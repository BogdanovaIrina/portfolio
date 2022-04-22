import React from 'react';
import s from './Title.module.scss';

type PropsType = {
    title: string
}

export const Title = ({title}:PropsType) => {
    return <h2 className={s.title}>{title}</h2>
}