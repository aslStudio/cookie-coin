import React from "react";

import { Card } from "@/shared/ui/Card";
import { TheText } from "@/shared/ui/TheText";
import cookie from "@/shared/assets/images/coins/cookie-coin.png"
import { Button } from "@/shared/ui/Button";

import { Task } from "../../model";

import styles from './TaskCard.module.scss'

export type TaskCardProps = Task & {
    className?: string
}

export const TaskCard = React.memo<TaskCardProps>(({ className, title, description, value }) => (
    <Card className={className} view="surface-brand" size="m">
        <div className={styles.row}>
            <TheText size="h6" color="brand">{title}</TheText>
            <div className={styles.amount}>
                <img className={styles.img} src={cookie} alt="cookie" />
                <TheText size="h6" color="surface">{value}</TheText>
            </div>
        </div>
        <TheText className={styles.description} size="p2" color="brand">{description}</TheText>
        <Button size="l" view="brand" onClick={() => {}}>APPLY</Button>
    </Card>
))