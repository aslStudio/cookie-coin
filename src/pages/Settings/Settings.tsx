import { settingsModel } from "@/entities/settings/model"

import { Card } from "@/shared/ui/Card"
import { LoadingContainer } from "@/shared/ui/LoadingContainer"
import { ScrollContainer } from "@/shared/ui/ScrollContainer"
import { TheText } from "@/shared/ui/TheText"

import styles from './Settings.module.scss'
import { SettingsCard } from "@/entities/settings/ui/SettingsCard"

export const Settings = () => {
    const { isLoading, list } = settingsModel.useSettings()

    return (
        <LoadingContainer isLoading={isLoading}>
            <ScrollContainer>
                <Header />
                {list.map(item => <SettingsCard {...item} className={styles.item} />)}
            </ScrollContainer>
        </LoadingContainer>
    )
}

const Header = () => (
    <Card className={styles.header} view="surface" size="l">
        <TheText className={styles.title} size="h4" color="brand">COMPLETE TASKS</TheText>
        <TheText size="p2" color="brand">Complete tasks to get $cookie coins to your score and upgrate farming properties</TheText>
    </Card>
)