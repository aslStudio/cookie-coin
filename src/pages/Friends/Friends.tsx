import { InviteCard } from "@/widgets/Invite"

import { friendsModel } from "@/entities/friends/model"
import { FriendCard } from "@/entities/friends/ui/FriendCard"

import { LoadingContainer } from "@/shared/ui/LoadingContainer"
import { ScrollContainer } from "@/shared/ui/ScrollContainer"
import { TheText } from "@/shared/ui/TheText"
import cookie from '@/shared/assets/images/coins/cookie-coin.png'

import styles from './Friends.module.scss'

export const Friends = () => {
    const { isLoading, list } = friendsModel.useFriends()

    return (
        <LoadingContainer isLoading={isLoading}>
            <ScrollContainer>
                <InviteCard />
                <TheText 
                    className={styles.title} 
                    size="h5" 
                    color="surface">
                        FRIENDS LIST
                </TheText>
                {list.map(item => (
                    <FriendCard 
                        className={styles.item}
                        avatar={cookie}
                        name={item.username} 
                        value={item.value} />
                ))}
            </ScrollContainer>
        </LoadingContainer>
    )
}