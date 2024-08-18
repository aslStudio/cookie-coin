import React from "react";
import {createPortal} from "react-dom";

import close from '@/shared/assets/images/common/close.png'
import {TheText} from "@/shared/ui/TheText";

import styles from './Modal.module.scss'

export type ModalProps = React.PropsWithChildren<{
    title: string
    isOpen: boolean
    onClose: () => void
}>

export const Modal = React.memo<ModalProps>(({ isOpen, onClose, title, children }) => {
    return createPortal(
        <div className={[styles.root, isOpen && styles['is-active']].join(' ')}>
            <div className={styles.overlay} />
            <div className={styles.card}>
                <button className={styles.close} onClick={onClose}>
                    <img src={close} alt={'close'} />
                </button>
                <TheText
                    className={styles.title}
                    size={'h4'}
                    color={'brand'}
                >
                    {title}
                </TheText>
                {children}
            </div>
        </div>,
        document.body,
    )
})