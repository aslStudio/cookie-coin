import React, {useEffect, useMemo, useState} from "react";
import {toFormattedNumber} from "@/shared/lib/number";

import ton from '@/shared/assets/images/coins/ton-coin.png'
import cookie from '@/shared/assets/images/coins/cookie-coin.png'

import styles from './Header.module.scss'
import { useLocation } from "react-router-dom";

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
            <Balance type="cookie" value={10_000} />
            <Balance type="ton" value={10_000} />
        </header>
    )
}

type BalanceProps = {
    type: 'cookie' | 'ton'
    value: number
}

const Balance = React.memo<BalanceProps>(({ type, value }) => {
    const showedValue = useMemo(() => toFormattedNumber(value), [value])
    
    const coin = useMemo(() => {
        if (type === 'cookie') {
            return cookie
        }

        return ton
    }, [type])

    return (
        <button className={styles.balance}>
            <img 
                src={coin} 
                className={styles.coin} 
                alt="coin" />
            <p className={styles.value}>{showedValue}</p>
        </button>
    )
})