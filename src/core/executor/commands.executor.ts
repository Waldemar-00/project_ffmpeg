import { ChildProcessWithoutNullStreams } from "child_process"
import { ILogger } from "../handlers/steam.logger.interface"
import { ICommandExec } from "./commands.types"

export abstract class CommandsExecutor<IInput>
{
    constructor ( private logger: ILogger ) { }

    async execute ()
    {
        const prompt = await this.prompt()
        const build =  this.build( prompt )
        const spawn = this.spawn( build )
        this.proccess( spawn, this.logger )
    }

    protected abstract prompt (): Promise<IInput>
    protected abstract build (input: IInput): ICommandExec
    protected abstract spawn (command: any): ChildProcessWithoutNullStreams
    protected abstract proccess(steam: ChildProcessWithoutNullStreams, logger: ILogger): void
}