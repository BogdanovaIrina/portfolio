import React from 'react';
import s from "../contact/Contact.module.css";

export const Contact = () => {
    return (
        <div className={s.main}>
            <h2>Contact</h2>
            <form action="" className={s.forma}>
                <input type="text"/>
                <input type="text"/>
                <textarea name=""></textarea>
            </form>
            <button className={s.btn}>
                <span>Send</span>
            </button>
        </div>
    )
}