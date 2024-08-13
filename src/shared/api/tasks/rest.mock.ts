import { TasksApi } from './types'

export const tasksApi: TasksApi = {
    async getList() {
        await new Promise(resolve => setTimeout(resolve, 2000))

        return {
            error: false,
            payload: {
                data: [
                    {
                        title: 'TASK NAME',
                        description: 'description description  description  description  description description description description description description description description description description ',
                        value: 100,
                    },
                    {
                        title: 'TASK NAME',
                        description: 'description description  description  description  description description description description description description description description description description ',
                        value: 100,
                    },
                    {
                        title: 'TASK NAME',
                        description: 'description description  description  description  description description description description description description description description description description ',
                        value: 100,
                    },
                    {
                        title: 'TASK NAME',
                        description: 'description description  description  description  description description description description description description description description description description ',
                        value: 100,
                    },
                    {
                        title: 'TASK NAME',
                        description: 'description description  description  description  description description description description description description description description description description ',
                        value: 100,
                    },
                    {
                        title: 'TASK NAME',
                        description: 'description description  description  description  description description description description description description description description description description ',
                        value: 100,
                    }
                ]
            }
        }
    },
}