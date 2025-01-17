import { PromptService } from "./core/prompt/prompt.service"
export class App
{
    async run ()
    {
        const result = await ( new PromptService().inquirer( 'It is a Number', 'number' ) )
        console.log( result )
    }
}
const app = new App()
app.run()