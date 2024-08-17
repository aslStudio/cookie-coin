import {createEvent, createStore, sample, createEffect, combine} from "effector";

const farmFx = createEffect(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return 10
})

const totalUpdated = createEvent()
const farmingStarted = createEvent()

const $total = createStore(0)
const $maxTotal = createStore(100)

const $isFarming = createStore(false)
const $isAvailable = combine(
    $total,
    $maxTotal,
    (total, maxTotal) => total < maxTotal
)
const $isFarmingAnimation = combine(
    $isFarming,
    $isAvailable,
    (isFarming, isAvailable) => isFarming && isAvailable
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

export const farmingModel = {
    $total,
    $maxTotal,

    $isFarming,
    $isFarmingAnimation,

    farmingStarted,
}