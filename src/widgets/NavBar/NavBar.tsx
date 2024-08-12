import React, { useState, useEffect, useMemo } from "react";

import coins from '@/shared/assets/images/navbar/coins.png'
import friends from '@/shared/assets/images/navbar/friends.png'
import settings from '@/shared/assets/images/navbar/settings.png'
import tasks from '@/shared/assets/images/navbar/tasks.png'

import styles from './NavBar.module.scss'
import { useLocation } from "react-router-dom";

const list = [
    {
        img: coins,
        text: 'FARMING'
    },
    {
        img: friends,
        text: 'FRIENDS'
    },
    {
        img: tasks,
        text: 'TASKS'
    },
    {
        img: settings,
        text: 'SETTINGS'
    },
]

export const NavBar = () => {
    const [isShowed, setIsShowed] = useState(false)
    const location = useLocation()

    const classes = useMemo(() => [
        styles.root,
        isShowed && styles['is-showed']
    ].join(' '), [isShowed])

    useEffect(() => {
        setIsShowed(location.pathname !== '/')
    }, [location])

    return (
        <footer className={classes}>
            {list.map(item => <Item {...item} />)}
        </footer>
    )
}

type ItemProps = {
    img: string
    text: string
    onClick?: () => void
}

const Item = React.memo<ItemProps>(({ img, text, onClick }) => (
    <button className={styles.item} onClick={onClick}>
        <img className={styles.img} src={img} alt="navbar_item" />
        <p className={styles.title}>{text}</p>
    </button>
))