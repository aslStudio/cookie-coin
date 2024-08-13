import { tasksApi } from "@/shared/api/tasks"
import { createEffect, createStore, sample } from "effector"
import { createGate, useGate, useUnit } from "effector-react"

export type Task = {
    title: string
    description: string
    value: number
}

const TasksGate = createGate()

const fetchFx = createEffect(tasksApi.getList)

const $list = createStore<Task[]>([])
const $isLoading = fetchFx.pending

sample({
    clock: TasksGate.open,
    target: fetchFx,
})

sample({
    clock: fetchFx.doneData,
    fn: ({ payload }) => payload.data,
    target: $list,
})

const useTasks = () => {
    useGate(TasksGate)

    return {
        isLoading: useUnit($isLoading),
        list: useUnit($list)
    }
}

export const tasksModel = {
    useTasks,
}