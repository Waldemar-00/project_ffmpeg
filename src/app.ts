import { PromptService } from "./core/prompt/prompt.service"
import { FFmpegExecotur } from './commands/ffmpeg/ffmpeg.executor'
import { ConsoleLogger } from './core/console/console.logger'
export class App
{
    async run ()
    {
        new FFmpegExecotur( ConsoleLogger.getConsoleLogger() ).execute()
    }
}
const app = new App()
app.run()