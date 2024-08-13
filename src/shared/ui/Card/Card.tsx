import React, { useMemo } from "react";

import styles from './Card.module.scss'

export type CardProps = React.PropsWithChildren<{
    size?: 'm' | 'l'
    view?: 'surface' | 'surface-brand'
    className?: string
}>

export const Card = React.memo<CardProps>(({ 
    size = 'm', 
    view = 'surface', 
    className,
    children 
}) => {
    const classes = useMemo(() => [
        styles.root,
        styles[`view-${view}`],
        styles[`size-${size}`],
        className && className,
    ].join(' '), [size, view, className])
    
    return (
        <article className={classes}>
            {children}
        </article>
    )
})