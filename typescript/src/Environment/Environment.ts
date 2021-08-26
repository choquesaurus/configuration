
import { Environments ,EnvironmentFile } from './Environment.constants';
import { resolve } from 'path';
import { config as ConfigDotenv }  from 'dotenv';

export default class Environment{
    public port:Number;
    
    constructor(env?: string ){
        if(env != 'production'){
            this.setEnvironment(env ||'');
        }
        this.port = Number(process.env.PORT);        
    }
    
    public setEnvironment(env: string):void{
        
        let envPath: string='';
        const rootDir:string = resolve(__dirname,'../../');
    
        switch (env) {
            case Environments.DEV:
                envPath = resolve(rootDir , EnvironmentFile.DEV);    
                break;
            default:
                break;
        }
        ConfigDotenv({ path: envPath });
    } 
}