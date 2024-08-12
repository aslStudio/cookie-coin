import React, {useMemo} from "react";
import {toFormattedNumber} from "@/shared/lib/number";

import ton from '@/shared/assets/images/coins/ton-coin.png'
import cookie from '@/shared/assets/images/coins/cookie-coin.png'

export const Header = () => {
    return (
        <header>

        </header>
    )
}

type BalanceProps = {
    type: 'cookie' | 'ton'
    value: number
}

const Balance = React.memo<BalanceProps>(({ type, value }) => {
    const showedValue = useMemo(() => toFormattedNumber(value), [value])

    return (
        <button>
            <img  />
            <p>showedValue</p>
        </button>
    )
})