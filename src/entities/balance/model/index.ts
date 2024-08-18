import {createEvent, createStore, sample} from "effector";

const cookieClaimed = createEvent<number>()

const $ton = createStore(10000)
const $cookie = createStore(10000)

sample({
    source: $cookie,
    clock: cookieClaimed,
    fn: (a, b) => a + b,
    target: $cookie
})

export const balanceModel = {
    $ton,
    $cookie,

    cookieClaimed,
}