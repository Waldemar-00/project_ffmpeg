import { ICommandExec } from '../../core/executor/commands.types'
export interface IFFmpegInput
{
    width: number
    height: number
    inputPath: string
    name: string
}

export interface ICommandExecFFmpeg extends ICommandExec
{
    outputPath: string
}