import React from "react";

import styles from './ScrollContainer.module.scss'

export type ScrollContainerProps = React.PropsWithChildren<{
    className?: string
}>

export const ScrollContainer = React.memo<ScrollContainerProps>(({ children, className }) => {
    return <div className={[styles.root, className ?? ''].join(' ')}>
        {children}
    </div>
})