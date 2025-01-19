import { dirname, isAbsolute, join } from "path"
import { promises } from 'fs'

//? __dirname is a global variable, it contains current directory for current executed file
//? dirname is the method wich get a dirrectory without files. It from path module of Node.js
//? join is the method wich join all arguments in one path and fix it. It from path module of Node.js
//? promises is the object in module fs(file system) in Node.js, which let work with promises simply
//? stat is the method from object promises, which gets information about file or directory and returns data or Error
//? unlinck is the method from promises object for async deleting file or symbolic referens
export class FileService
{
    private async isExist ( path: string )
    {
        try {
            await promises.stat( path )
            return true
        } catch (error) {
            return false
        }
    }
    buildFilePath ( fileName: string, fileExtension: string, pathForSaveFile: string): string
    {
        if ( !isAbsolute( pathForSaveFile ) ) pathForSaveFile = join( __dirname + '/' + pathForSaveFile )
        return join(dirname( pathForSaveFile ) + '/' + fileName + '.' + fileExtension)
    }
    async deleteFileIfExists ( path: string )
    {
        if(await this.isExist(path)) await promises.unlink(path)
    }
}