import { SettingsApi } from './types'

export const settingsApi: SettingsApi = {
    async getList() {
        await new Promise(resolve => setTimeout(resolve, 2000))

        return {
            error: false,
            payload: {
                data: [
                    {
                        title: 'TON WALLET',
                        description: 'Connect your TON wallet to get $TON and $COOKIE coins',
                        value: null       
                    },
                    {
                        title: 'TWITTER',
                        description: 'Connect your twitter account to get bonuses for tasks',
                        value: '@USERNAME'
                    }
                ]
            }
        }
    }
}