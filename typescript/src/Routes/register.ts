import { Application } from 'express';
import { routesSaludos } from './index';
const RegisterRoutes = (app: Application): void => {
    
	app.use('/', routesSaludos);

};

export { RegisterRoutes };
