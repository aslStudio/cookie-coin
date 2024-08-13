import { settingsApi } from "@/shared/api/settings/rest.mock"
import { createEffect, createStore, sample } from "effector"
import { createGate, useGate, useUnit } from "effector-react"

export type SettingsItem = {
    title: string
    description: string
    value: string | null
}

const SettingsGate = createGate()

const fetchFx = createEffect(settingsApi.getList)

const $list = createStore<SettingsItem[]>([])
const $isLoading = fetchFx.pending

sample({
    clock: SettingsGate.open,
    target: fetchFx,
})

sample({
    clock: fetchFx.doneData,
    fn: ({ payload }) => payload.data,
    target: $list,
})

const useSettings = () => {
    useGate(SettingsGate)

    return {
        isLoading: useUnit($isLoading),
        list: useUnit($list)
    }
}

export const settingsModel = {
    useSettings,
}