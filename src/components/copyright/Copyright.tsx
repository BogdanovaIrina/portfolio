import React from 'react';
import s from "./Copyright.module.scss";

export const Copyright = () => {
    return (
        <div className={s.main}>
            <div className={s.copy}>
                <div className={s.links}>
                    <a href="">Email</a>
                    <a href="">Linkedin</a>
                </div>
                <div>
                    <p>Copyright © 2022. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}