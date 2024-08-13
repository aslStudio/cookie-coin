import React from "react";

import { Card } from "@/shared/ui/Card";
import { TheText } from "@/shared/ui/TheText";
import { Button } from "@/shared/ui/Button";

import { SettingsItem } from "../../model";
import styles from './SettingsCard.module.scss'

export type SettingsCardProps = SettingsItem & {
    className: string
}

export const SettingsCard = React.memo<SettingsCardProps>(({
    title,
    description,
    value,
    className
}) => (
    <Card className={className} size="l" view="surface-brand">
        <TheText size="h6" color="brand">{title}</TheText>
        <TheText className={styles.description} size="p2" color="brand">{value ?? description}</TheText>
        <Button size="m" view="brand" onClick={() => 0}>{value ? 'DISCONNECT' : 'CONNECT'}</Button>
    </Card>
))