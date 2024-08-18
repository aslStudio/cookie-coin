import React, {useEffect, useMemo, useState} from "react";
import { useLocation } from "react-router-dom";

import {CookieBalance, TonBalance} from "@/entities/balance/ui/Balance";

import styles from './Header.module.scss'

export const Header = () => {
    const [isShowed, setIsShowed] = useState(false)
    const location = useLocation()

    const classes = useMemo(() => [
        styles.root,
        isShowed && styles['is-showed']
    ].join(' '), [isShowed])

    useEffect(() => {
        console.log(location, location.pathname !== '/')
        setIsShowed(location.pathname !== '/')
    }, [location])

    return (
        <header className={classes}>
            <CookieBalance />
            <TonBalance />
        </header>
    )
}