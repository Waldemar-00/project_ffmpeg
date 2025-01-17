// import { input } from '@inquirer/prompts'
import inquirer from 'inquirer'
import {TPrompt} from './prompt.types'
export class PromptService
{
    async inquirer<T>(message: string, type: TPrompt ): Promise<T>
    {
        const { result } = await inquirer.prompt<{ result: T }>( [
            {
                type,
                name: 'result',
                message
            }
        ] )
         return result
    }
}