import React from 'react'
import {FarmingModule} from "@/features/farming/ui/FarmingModule";
import {ScrollContainer} from "@/shared/ui/ScrollContainer";

import styles from './Main.module.scss'

export const Main = () => (
    <ScrollContainer className={styles.root}>
        <FarmingModule />
    </ScrollContainer>
)