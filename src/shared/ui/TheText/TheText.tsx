import React, { useMemo } from "react";

import styles from './TheText.module.scss'

export type TheTextProps = React.PropsWithChildren<{
    size: 'p1' | 'p2' | 'p3' | 'h3' | 'h4' | 'h5' | 'h6'
    color: 'brand' | 'surface'
    className?: string
}>

export const TheText = React.memo<TheTextProps>(({
    size,
    color,
    className,
    children,
}) => {
    const classes = useMemo(() => [
        styles.root,
        styles[`size-${size}`],
        styles[`view-${color}`],
        className && className
    ].join(' '), [size, color, className])

    return (
        <p className={classes}>{children}</p>
    )
})