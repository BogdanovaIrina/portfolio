import React from 'react';
import s from './Footer.module.scss';
import {Title} from "../title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <div className={s.main}>
            <Title title={'Get in Touch'}/>
            <div className={s.foot}>
                <div className={s.left}>
                    <form action="">
                        <div className={s.inp}>
                            <input type="text" placeholder='Your name'/>
                            <input type="email" placeholder='Your email'/>
                        </div>
                        <textarea placeholder='Your Message' cols={40} rows={10}/>
                        <input className={s.btn} type='submit' value='Send message'/>
                    </form>
                </div>
                <div className={s.right}>
                    <div className={s.subright}>
                        <div className={s.text}>
                            <h4>Phone</h4>
                            <a href="tel:+375-29-294-10-94">+375-29-294-10-94</a>
                        </div>
                        <div className={s.circle}>
                            <FontAwesomeIcon icon={faPhone} className={s.icon}/>
                        </div>
                    </div>
                    <div className={s.subright}>
                        <div className={s.text}>
                            <h4>Email</h4>
                            <a href="">irina.bogdanova.1990@gmail.com</a>
                        </div>
                        <div className={s.circle}>
                            <FontAwesomeIcon icon={faEnvelope} className={s.icon}/>
                        </div>
                    </div>
                    <div className={s.subright}>
                        <div className={s.text}>
                            <h4>Location</h4>
                            <a href="">Belarus, Minsk</a>
                        </div>
                        <div className={s.circle}>
                            <FontAwesomeIcon icon={faHouse} className={s.icon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}