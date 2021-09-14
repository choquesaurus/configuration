import { Application } from 'express';
import { routesSaludos , routesProjects } from './index';
const RegisterRoutes = (app: Application): void => {
    
	app.use('/api/saludo', routesSaludos);
	app.use('/api/projects',routesProjects);

};

export { RegisterRoutes };
