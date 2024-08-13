import { ResponseDefault } from "@/shared/lib/types"

export type GetTaskListResponse = ResponseDefault<{
    data: {
        title: string
        description: string
        value: number
    }[]
}>

export type TasksApi = {
    getList: () => Promise<GetTaskListResponse>
}