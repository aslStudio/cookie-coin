import React from "react";

import loader from '@/shared/assets/images/common/loader.png'

import styles from './Auth.module.scss'
import {useNavigate} from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.root} onClick={() => navigate('/main')}>
            <div className={styles.main}>
                <img src={loader} className={styles.loader} alt={'loader'} />
                <h1 className={styles.title}>LOADING</h1>
            </div>
        </div>
    )
}
