import { tasksModel } from "@/entities/tasks/model"
import { TaskCard } from "@/entities/tasks/ui/TaskCard"
import { Card } from "@/shared/ui/Card"
import { LoadingContainer } from "@/shared/ui/LoadingContainer"
import { ScrollContainer } from "@/shared/ui/ScrollContainer"
import { TheText } from "@/shared/ui/TheText"

import styles from './Tasks.module.scss'

export const Tasks = () => {
    const { isLoading, list } = tasksModel.useTasks()

    return (
        <LoadingContainer isLoading={isLoading}>
            <ScrollContainer>
                <Header />
                <TheText className={styles.subtitle} size="h5" color="surface">TASKS LIST</TheText>
                {list.map(item => <TaskCard {...item} className={styles.item} />)}
            </ScrollContainer>
        </LoadingContainer>
    )
}

const Header = () => (
    <Card view="surface" size="l">
        <TheText className={styles.title} size="h4" color="brand">COMPLETE TASKS</TheText>
        <TheText size="p2" color="brand">Complete tasks to get $cookie coins to your score and upgrate farming properties</TheText>
    </Card>
)