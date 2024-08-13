import React, { useMemo } from "react"

import styles from './Button.module.scss'

export type ButtonProps = React.PropsWithChildren<{
    view?: 'brand' | 'secondary'
    size?: 'l' | 'm'
    isShadow?: boolean
    className?: string
    onClick: () => void
}>

export const Button = React.memo<ButtonProps>(({ 
    view = 'brand', 
    size = 'm', 
    isShadow = false,
    className,
    children, 
    onClick 
}) => {
    const classes = useMemo(() => [
        styles.root,
        styles[`view-${view}`],
        styles[`size-${size}`],
        isShadow && styles['is-shadow'],
        className && className,
    ].join(' '), [view, size, isShadow, className])
    
    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
})