import background from '@/shared/assets/images/common/bg.png'
import logo from '@/shared/assets/images/common/logo.png'
import cookie from '@/shared/assets/images/common/cookie.png'

import styles from './App.module.scss';
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";

const visiablePathes = [
    '/',
    '/main'
]

export const CrossScreenContent = () => {
    const location = useLocation()
    const [ isVisiable, setIsVisiable ] = useState(true)

    useEffect(() => {
        setIsVisiable(visiablePathes.includes(location.pathname))
    }, [location]);

    return (
        <div>
            <img
                className={styles.background}
                src={background}
                alt={'background'}/>
            <img
                className={[styles.logo, !isVisiable && styles['is-hidden']].join(' ')}
                src={logo}
                alt={'logo'}/>
            <img
                className={[styles.cookie, !isVisiable && styles['is-hidden']].join(' ')}
                src={cookie}
                alt={'cookie'}/>
        </div>
    )
}