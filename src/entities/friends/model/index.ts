import { friendsApi } from "@/shared/api/friends";
import { createEffect, createStore, sample } from "effector";
import { createGate, useGate, useUnit } from "effector-react";

type Friend = {
    username: string
    value: number
}

const FriendsGate = createGate()

const fetchFx = createEffect(friendsApi.getList)

const $list = createStore<Friend[]>([])
const $isLoading = fetchFx.pending

sample({
    clock: FriendsGate.open,
    target: fetchFx,
})

sample({
    clock: fetchFx.doneData,
    fn: ({ payload }) => payload.data,
    target: $list,
})

const useFriends = () => {
    useGate(FriendsGate)

    return {
        isLoading: useUnit($isLoading),
        list: useUnit($list),
    }
}

export const friendsModel = {
    useFriends,
}