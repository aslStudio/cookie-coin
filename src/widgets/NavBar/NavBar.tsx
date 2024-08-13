import React, { useState, useEffect, useMemo, useCallback } from "react";

import coins from '@/shared/assets/images/navbar/coins.png'
import friends from '@/shared/assets/images/navbar/friends.png'
import settings from '@/shared/assets/images/navbar/settings.png'
import tasks from '@/shared/assets/images/navbar/tasks.png'

import styles from './NavBar.module.scss'
import { useLocation, useNavigate } from "react-router-dom";

enum Page {
    FARMING,
    FRIENDS,
    TASKS,
    SETTINGS
}

const list = [
    {
        id: Page.FARMING,
        img: coins,
        text: 'FARMING'
    },
    {
        id: Page.FRIENDS,
        img: friends,
        text: 'FRIENDS'
    },
    {
        id: Page.TASKS,
        img: tasks,
        text: 'TASKS'
    },
    {
        id: Page.SETTINGS,
        img: settings,
        text: 'SETTINGS'
    },
]

export const NavBar = () => {
    const [isShowed, setIsShowed] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const classes = useMemo(() => [
        styles.root,
        isShowed && styles['is-showed']
    ].join(' '), [isShowed])

    const onClick = useCallback((key: Page) => {
        switch (key) {
            case Page.FARMING:
                navigate('/main')
                break
            case Page.FRIENDS:
                navigate('/friends')
                break
            case Page.TASKS:
                navigate('/tasks')
                break
            case Page.SETTINGS:
                navigate('/settings')
                break
        }
    }, [navigate])

    useEffect(() => {
        setIsShowed(location.pathname !== '/')
    }, [location])

    return (
        <footer className={classes}>
            {list.map(item => <Item {...item} onClick={() => onClick(item.id)} />)}
        </footer>
    )
}

type ItemProps = {
    img: string
    text: string
    onClick: () => void
}

const Item = React.memo<ItemProps>(({ img, text, onClick }) => (
    <button className={styles.item} onClick={onClick}>
        <img className={styles.img} src={img} alt="navbar_item" />
        <p className={styles.title}>{text}</p>
    </button>
))