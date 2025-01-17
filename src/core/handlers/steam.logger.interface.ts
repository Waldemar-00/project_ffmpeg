export interface ILogger
{
    log ( ...args: any[] ): void
    error ( error: Error ): void
    end (): void
}