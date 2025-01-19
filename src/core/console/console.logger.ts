import { ILogger } from "../handlers/stream.logger.interface"

export class ConsoleLogger implements ILogger
{
    static #logger: ConsoleLogger
    public static getConsoleLogger ()
    {
        if ( !ConsoleLogger.#logger ) ConsoleLogger.#logger = new ConsoleLogger()
        return ConsoleLogger.#logger
    }
    log ( message: string )
    {
        console.log( message ) //???????????? NOT WORK
    }
    error ( error: Error )
    {
        if (error instanceof Error) console.log( error.message )
    }
    end() { console.log('DONE') }
}