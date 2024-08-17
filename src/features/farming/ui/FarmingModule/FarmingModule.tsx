import React, {useMemo} from "react"
import {useUnit} from "effector-react";
import {farmingModel} from "@/features/farming/model";
import {TheText} from "@/shared/ui/TheText";
import {Button} from "@/shared/ui/Button";
import {reflect} from "@effector/reflect";
import {toFormattedNumber} from "@/shared/lib/number";

import cookie from '@/shared/assets/images/coins/cookie-coin.png'

import styles from './FarmingModule.module.scss'

export const FarmingModule = () => {
    const isFarming = useUnit(farmingModel.$isFarming)

    return (
        <div className={styles.root}>
            <StartedReflect
                className={[styles['started'], isFarming && styles['is-active']].join(' ')}
            />
            <NotStartedReflect
                className={[styles['not-started'], !isFarming && styles['is-active']].join(' ')}
            />
        </div>
    )
}

const NotStarted = React.memo<{
    className: string
    onClick: () => void
}>(({ className, onClick }) => (
    <div className={className}>
        <TheText className={styles.description} size={'p2'} color={'brand'}>
            Click button and start farming cookie coin
        </TheText>
        <Button
            view={'brand'}
            size={'l'}
            isShadow={true}
            onClick={onClick}
        >
            START FARMING
        </Button>
    </div>
))

const NotStartedReflect = reflect({
    view: NotStarted,
    bind: {
        onClick: farmingModel.farmingStarted,
    }
})

const Started = React.memo<{
    total: number
    maxTotal: number
    onUpgrade: () => void
    onClaim: () => void
    className: string
}>(({
        className,
        total,
        maxTotal,
        onClaim,
    onUpgrade
}) => {
    return (
        <div className={className}>
            <TheText className={styles.total} size={'h3'} color={'surface'}>{toFormattedNumber(total)} $COOKIE</TheText>
            <ProgressBar total={total} maxTotal={maxTotal} />
            <Button isShadow={true} view={'brand'} size={'l'} onClick={onClaim}>CLAIM</Button>
            <Button className={styles.upgrade} view={'secondary'} size={'m'} onClick={onUpgrade}>UPGRADE</Button>
        </div>
    )
})

const StartedReflect = reflect({
    view: Started,
    bind: {
        total: farmingModel.$total,
        maxTotal: farmingModel.$maxTotal,
        onClaim: () => {},
        onUpgrade: () => {},
    }
})

const ProgressBar = React.memo<{
    total: number
    maxTotal: number
}>(({
    total,
    maxTotal
}) => {
    const list = useMemo(() => {
        let count = 0;
        let curr = total

        while (curr > 0) {
            count += 1
            curr = curr - maxTotal / 10
        }

        return count
    }, [total, maxTotal])

    return <div className={styles['progress-bar']}>
        <div className={styles['row']}>
            {Array(list).fill(1).map((_, key) => (
                <img key={key} src={cookie} alt={'cookie'}/>
            ))}
        </div>
        <TheText size={'p3'} color={'brand'}>{toFormattedNumber(maxTotal)}</TheText>
    </div>
})