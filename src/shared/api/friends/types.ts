import { ResponseDefault } from "@/shared/lib/types"

export type GetFriendsListResponse = ResponseDefault<{
    data: {
        username: string
        value: number
    }[]
}>

export type FriendsApi = {
    getList: () => Promise<GetFriendsListResponse>
}