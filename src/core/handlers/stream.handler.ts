import { ChildProcessWithoutNullStreams } from "child_process"
import { ILogger } from "./steam.logger.interface"
import { TPrompt } from "../prompt/prompt.types"
export class SteramHandler
{
    constructor ( private logger: ILogger ) { }
    processOutput (stream: ChildProcessWithoutNullStreams)
    {
        stream.stdout.on( "data", ( data: TPrompt ) => this.logger.log(data) )
        stream.stderr.on( "data", ( data: Error ) => this.logger.error( data ) )
        stream.on( "close", () => this.logger.end() )

    }
}