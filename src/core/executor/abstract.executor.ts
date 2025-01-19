import { ChildProcessWithoutNullStreams } from "child_process"
import { ILogger } from "../handlers/stream.logger.interface"
import { ICommandExec } from "./commands.types"

export abstract class AbstractExecutor<IInput>
{
    constructor ( private logger: ILogger ) { }

    async execute ()
    {
        const prompt = await this.prompt() //* new PromptService() with inquirer library
        const build =  this.build( prompt )
        const spawn = this.ourSpawn( build )
        this.proccess( spawn, this.logger )
    }

    protected abstract prompt (): Promise<IInput>
    protected abstract build (input: IInput): ICommandExec
    protected abstract ourSpawn (command: any): ChildProcessWithoutNullStreams
    protected abstract proccess(stream: ChildProcessWithoutNullStreams, logger: ILogger): void
}