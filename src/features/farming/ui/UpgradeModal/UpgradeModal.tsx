import React from "react";

import {Modal, ModalProps} from "@/shared/ui/Modal";
import {TheText} from "@/shared/ui/TheText";
import cookie from "@/shared/assets/images/coins/cookie-coin.png";
import {Button} from "@/shared/ui/Button";

import styles from './Upgrade.module.scss'

export type UpgradeModalProps = Omit<ModalProps, 'title' | 'children'>

export const UpgradeModal = React.memo<UpgradeModalProps>(({
    isOpen,
    onClose,
}) => {
    return (
        <Modal title={'UPGRADES'} isOpen={isOpen} onClose={onClose}>
            <TheText className={styles.title} size={'h5'} color={'surface'}>FARMING SPEED</TheText>
            <div className={styles.row}>
                <TheText size={'p1'} color={'surface'}>10</TheText>
                <img src={cookie} alt={'cookie'} />
                <TheText size={'p1'} color={'surface'}>/sec</TheText>
            </div>
            <Button className={styles.button} view={'brand'} size={'m'} onClick={onClose}>UPGRADE</Button>
            <TheText className={styles.title} size={'h5'} color={'surface'}>STORAGE SIZE</TheText>
            <div className={styles.row}>
                <TheText size={'p1'} color={'surface'}>10</TheText>
                <img src={cookie} alt={'cookie'} />
            </div>
            <Button className={styles.button} view={'brand'} size={'m'} onClick={onClose}>UPGRADE</Button>
        </Modal>
    )
})