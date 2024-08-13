import { Card } from "@/shared/ui/Card"
import { TheText } from "@/shared/ui/TheText"

import cookie from '@/shared/assets/images/coins/cookie-coin.png'
import { Button } from "@/shared/ui/Button/Button"
import { useTelegram } from "@/shared/lib/hooks/useTelegram"

import styles from './Invite.module.scss'

export const InviteCard = () => {
    const { sendInviteLink } = useTelegram()

    return (
        <Card view="surface" size="l">
            <TheText size="h4" color="brand">GET BONUSES</TheText>
            <div className={styles.row}>
                <TheText size="p1" color="surface">10</TheText>
                <img 
                    className={styles.img} 
                    src={cookie} 
                    alt="cookie" />
                <TheText size="p1" color="surface">/friend</TheText>
            </div>
            <TheText size="p2" color="brand">Invite friends and get $cookie coins to your score</TheText>
            <Button 
                className={styles.button} 
                view="brand" 
                size="l" 
                onClick={() => sendInviteLink('test')}>
                    SEND INVITE LINK
            </Button>
        </Card>
    )
}