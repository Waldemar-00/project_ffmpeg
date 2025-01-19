import { ChildProcessWithoutNullStreams, spawn } from 'child_process'
import { AbstractExecutor } from '../../core/executor/abstract.executor'
import { ICommandExecFFmpeg } from './ffmpeg.interface'
import { ILogger } from '../../core/handlers/stream.logger.interface'
import { IFFmpegInput } from './ffmpeg.interface'
import { FileService } from '../../core/files/file.service'
import { PromptService } from '../../core/prompt/prompt.service'
import { FFmpegBuilder } from './ffmpeg.builder'
import { SteramHandler } from '../../core/handlers/stream.handler'

export class FFmpegExecotur extends AbstractExecutor<IFFmpegInput>
{
    #fileService: FileService = new FileService()
    #promptService: PromptService = new PromptService()
    constructor ( logger: ILogger )
    {
        super( logger )
    }
    protected async prompt (): Promise<IFFmpegInput>
    {
        const width = await this.#promptService.inquirer<number>( "Width", 'number' )
        const height = await this.#promptService.inquirer<number>( "Height", 'number' )
        const inputPath = await this.#promptService.inquirer<string>( "Path", "input" )
        const name = await this.#promptService.inquirer<string>( "Name", "input" )
        return { width, height, inputPath, name }
    }
    protected build ( { width, height, inputPath, name }: IFFmpegInput ): ICommandExecFFmpeg
    {
        const outputPath = this.#fileService.buildFilePath( name, 'mp4', inputPath )
        const args = new FFmpegBuilder()
            .input( inputPath )
            .setVideoSize( width, height )
            .output( outputPath )
        return { command: "ffmpeg", args, outputPath }
    }
    protected ourSpawn ( { command, args, outputPath }: ICommandExecFFmpeg ): ChildProcessWithoutNullStreams
    {
        this.#fileService.deleteFileIfExists( outputPath )
        return spawn( command, args)
    }
    protected proccess ( stream: ChildProcessWithoutNullStreams, logger: ILogger ): void
    {
        new SteramHandler( logger ).processOutput(stream)
    }

}