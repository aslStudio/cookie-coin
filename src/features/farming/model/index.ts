import {createEvent, createStore, sample, createEffect, combine} from "effector";
import {balanceModel} from "@/entities/balance/model";

const farmFx = createEffect(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return 10
})

const totalUpdated = createEvent()
const farmingStarted = createEvent()
const totalClaimed = createEvent()
const totalCleared = createEvent()

const $total = createStore(0).reset(totalCleared)
const $maxTotal = createStore(100)

const $isPending = farmFx.pending
const $isFarming = createStore(false)
const $isAvailable = combine(
    $total,
    $maxTotal,
    $isPending,
    (total, maxTotal, isPending) => (total < maxTotal) && !isPending
)
const $isFarmingAnimation = combine(
    $isFarming,
    $total,
    $maxTotal,
    (isFarming, total, maxTotal) => isFarming && (total < maxTotal)
)

sample({
    clock: farmingStarted,
    fn: () => true,
    target: [$isFarming, farmFx],
})

sample({
    source: $total,
    clock: farmFx.doneData,
    fn: (total, added) => total + added,
    target: [$total, totalUpdated],
})

sample({
    source: $isAvailable,
    clock: totalUpdated,
    filter: isAvailable => isAvailable,
    target: farmFx,
})

sample({
    source: $total,
    clock: totalClaimed,
    target: [balanceModel.cookieClaimed, totalCleared, totalUpdated],
})

export const farmingModel = {
    $total,
    $maxTotal,

    $isFarming,
    $isFarmingAnimation,

    farmingStarted,
    totalClaimed,
}