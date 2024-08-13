import React, { useMemo } from "react"

import { Card } from "@/shared/ui/Card"
import { TheText } from "@/shared/ui/TheText"

import styles from './FriendCard.module.scss'

export type FriendCardProps = {
    avatar: string
    name: string
    value: number
    className: string
}

export const FriendCard = React.memo<FriendCardProps>(({ 
    name, 
    value, 
    avatar,
    className 
}) => {
    return <Card className={className} view={'surface-brand'}>
        <div className={styles.main}>
            <div className={styles.left}>
                <img className={styles.avatar} src={avatar} alt="cookie" />
                <TheText size="p3" color="brand">{name}</TheText>
            </div>
            <TheText size="p3" color="brand">{value} $COOKIE</TheText>
        </div>
    </Card>
})