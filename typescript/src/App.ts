/** @format */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { RegisterRoutes } from './Routes/register';
import './Connection/index';
export default class App {
	public app: express.Application;

	public port: number;

	constructor() {
		this.app = express();
		this.app.set('port', (process.env.PORT as string) || '5600');
		this.middleware();
		this.routes();
	}

	private middleware(): void {
		this.app.use(cors());
		this.app.use(morgan('dev'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
    }

	private routes(): void {
		RegisterRoutes(this.app);
        // this.app.use(
		// 	'/',
		// 	(req: express.Request, res: express.Response): void => {
		// 		console.log('hola');
		// 		res.send({ message: 'Saludos' });
		// 	},
		// );
	}

	public start(): void {
		this.app.listen(this.app.get('port'), () => {
			console.log(`Server Running  ${this.app.get('port')}`);
		});
	}
}

// const env:Environment = new Environment(process.env.NODE_ENV);
// const app = new App(env,env.port as number);
// app.start();

const server = new App();

export { server as Server };
