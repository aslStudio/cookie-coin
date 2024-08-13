import { ResponseDefault } from "@/shared/lib/types"

export type GetSettingsListResponse = ResponseDefault<{
    data: {
        title: string
        description: string
        value: string | null
    }[]
}>

export type SettingsApi = {
    getList: () => Promise<GetSettingsListResponse>
}