import React from "react";

import styles from './ScrollContainer.module.scss'

export type ScrollContainerProps = React.PropsWithChildren

export const ScrollContainer = React.memo<ScrollContainerProps>(({ children }) => {
    return <div className={styles.root}>
        {children}
    </div>
})