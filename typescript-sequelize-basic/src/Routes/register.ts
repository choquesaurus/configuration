import { Application } from 'express';
import { routesSaludos , routesProjects,routesTask } from './index';
const RegisterRoutes = (app: Application): void => {
    
	app.use('/api/saludo', routesSaludos);
	app.use('/api/projects',routesProjects);
	app.use('/api/task',routesTask);

};

export { RegisterRoutes };
