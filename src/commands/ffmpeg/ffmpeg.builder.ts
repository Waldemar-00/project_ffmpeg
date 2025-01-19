export class FFmpegBuilder
{
    private inputPath!: string
    private options: Map<string, string> = new Map().set('-c:v', 'libx264')

    input ( inputPath: string ): this
    {
        this.inputPath = inputPath
        return this
    }
    output ( outputPath: string ): string[]
    {
        if ( !this.inputPath ) throw new Error( 'No input path specified' )
        const args: string[] = [ '-i', this.inputPath ]
        this.options.forEach( ( value, index ) => args.push( index, value ) )
        args.push( outputPath )
        return args
    }

    setVideoSize (width: number, height: number): this
    {
        this.options.set( '-s', `${ width }x${ height }` )
        return this
    }
}

// new FFmpegBuilder()
//     .input( '' )
//     .setVideoSize( 1920, 1080 )
//     .output('//')