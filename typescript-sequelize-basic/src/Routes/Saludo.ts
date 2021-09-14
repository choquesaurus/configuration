import { Router , Request , Response } from  'express'; 

const routesSaludos = Router();

routesSaludos.get('/',(_:Request,res:Response)=>{ 
    res.send({ message: 'Saludos' });
 });

export { routesSaludos };

