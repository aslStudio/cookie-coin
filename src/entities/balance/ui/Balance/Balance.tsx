import React, {useMemo, useState} from "react";
import {reflect} from "@effector/reflect";

import {balanceModel} from "@/entities/balance/model";

import {Modal, ModalProps} from "@/shared/ui/Modal";
import {TheText} from "@/shared/ui/TheText";
import {Button} from "@/shared/ui/Button";
import {toFormattedNumber} from "@/shared/lib/number";
import cookie from "@/shared/assets/images/coins/cookie-coin.png";
import ton from "@/shared/assets/images/coins/ton-coin.png";
import tonBrand from "@/shared/assets/images/coins/ton-brand.png";

import styles from './Balance.module.scss'

type BalanceProps = {
    type: 'cookie' | 'ton'
    value: number
}

const Balance = React.memo<BalanceProps>(({ type, value }) => {
    const [ isOpen, setIsOpen ] = useState(false)

    const showedValue = useMemo(() => toFormattedNumber(value), [value])

    const coin = useMemo(() => {
        if (type === 'cookie') {
            return cookie
        }

        return ton
    }, [type])

    return (
        <>
            <button className={styles.balance} onClick={() => setIsOpen(true)}>
                <img
                    src={coin}
                    className={styles.coin}
                    alt="coin"/>
                <p className={styles.value}>{showedValue}</p>
            </button>
            <BalanceModalReflect isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
})

export const TonBalance = reflect({
    view: Balance,
    bind: {
        type: 'ton',
        value: balanceModel.$ton
    }
})

export const CookieBalance = reflect({
    view: Balance,
    bind: {
        type: 'cookie',
        value: balanceModel.$cookie,
    }
})

type BalanceModalProps = Omit<ModalProps, 'title'> & {
    cookieValue: number
    tonValue: number
}

const BalanceModal = React.memo<BalanceModalProps>(({
    isOpen,
    cookieValue,
    tonValue,
    onClose
}) => {
    return (
        <Modal
            isOpen={isOpen}
            title={'BALANCE'}
            onClose={onClose}
        >
            <div className={styles.row}>
                <TheText size={'h5'} color={'surface'}>$COOKIE</TheText>
                <img src={cookie} alt={'cookie'}/>
            </div>
            <TheText className={styles['modal-value']} size={'p1'} color={'surface'}>{toFormattedNumber(cookieValue)}</TheText>
            <Button className={styles.button} view={'brand'} size={'m'} onClick={onClose}>DEPOSIT</Button>
            <Button className={styles.button} view={'secondary'} size={'m'} onClick={onClose}>SEND</Button>
            <div className={styles.row}>
                <TheText size={'h5'} color={'surface'}>$TON</TheText>
                <img src={tonBrand} alt={'ton'}/>
            </div>
            <TheText className={styles['modal-value']} size={'p1'} color={'surface'}>{toFormattedNumber(tonValue)}</TheText>
            <Button className={styles.button} view={'brand'} size={'m'} onClick={onClose}>DEPOSIT</Button>
            <Button className={styles.button} view={'secondary'} size={'m'} onClick={onClose}>SEND</Button>
        </Modal>
    )
})

const BalanceModalReflect = reflect({
    view: BalanceModal,
    bind: {
        cookieValue: balanceModel.$cookie,
        tonValue: balanceModel.$ton,
    }
})