import { ChildProcessWithoutNullStreams } from "child_process"
import { ILogger } from "./stream.logger.interface"
import { TPrompt } from "../prompt/prompt.types"
export class SteramHandler
{
    constructor ( private logger: ILogger ) { }
    processOutput (stream: ChildProcessWithoutNullStreams)
    {
        stream.stdout.on( "data", ( data: any ) => this.logger.log( data.toString() ) )
        stream.stderr.on( "data", ( data: any ) => this.logger.error( data.toString() ) )
        stream.on( "close", () => this.logger.end() )

    }
}