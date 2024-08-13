import React, { useMemo } from "react";

import loader from '@/shared/assets/images/common/loader.png'

import styles from './LoadingContainer.module.scss'

export type LoadingContainerProps = React.PropsWithChildren<{
    isLoading: boolean
}>

export const LoadingContainer = React.memo<LoadingContainerProps>(({ isLoading, children }) => {
    const classes = useMemo(() => [
        styles.root,
        isLoading ? styles['is-loading'] : styles['is-content']
    ].join(' '), [isLoading])
    
    return <div className={classes}>
        <div className={styles.loader}>
            <img className={styles.img} src={loader} alt="loader" />
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>
})