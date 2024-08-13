import { FriendsApi } from './types'

export const friendsApi: FriendsApi = {
    async getList() {
        await new Promise(resolve => setTimeout(resolve, 2000))

        return {
            error: false,
            payload: {
                data: [
                    {
                        username: 'USERNAME 1',
                        value: 1000
                    },
                    {
                        username: 'USERNAME 2',
                        value: 1000
                    },
                    {
                        username: 'USERNAME 3',
                        value: 1000
                    },
                    {
                        username: 'USERNAME 1',
                        value: 1000
                    },
                    {
                        username: 'USERNAME 2',
                        value: 1000
                    },
                    {
                        username: 'USERNAME 3',
                        value: 1000
                    },
                    {
                        username: 'USERNAME 1',
                        value: 1000
                    },
                    {
                        username: 'USERNAME 2',
                        value: 1000
                    },
                    {
                        username: 'USERNAME 3',
                        value: 1000
                    },
                ]
            }
        }
    },
}