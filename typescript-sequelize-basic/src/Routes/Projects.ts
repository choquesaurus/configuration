/** @format */

import { Router, Response, Request } from 'express'
import { logger } from '../lib/logger'
import { Project as ProjectController } from '../Controllers/index'
import { Dtoprojects } from '../Interfaces/index'

// interface ApiResponse<T>{
// 	errorMessage?: string;
// 	responseCode?: string;
// 	data?: T;
// }

// async function getAll(): Promise<ApiResponse<any>>  {
//     const all = await MProject.findAll();

//     return { data:all };
// }

const routesProjects = Router()

routesProjects
	.route('/')
	.get(async (_, res: Response): Promise<void> => {
		try {
			const dto = new ProjectController()
			const all = await dto.process('getAll')
			res.status(200).json({ values: all })
		} catch (error) {
			logger.error(error)
		}
	})
	.post(async (req: Request, res: Response): Promise<void> => {
		try {
			const data = req.body
			const dto = new ProjectController(data as Dtoprojects)
			const createProject = await dto.process('create')

			res.status(200).json({ values: createProject })
		} catch (error) {
			logger.error(error)
		}
	})
routesProjects
    .route('/:id')
    .delete(async (req:Request , res:Response):Promise<void> => {
     try {
            const dto = new ProjectController({ id:req.params.id })
			const createProject = await dto.process('remove')
			res.status(200).json({ values: createProject })
            
     } catch (error:any) {

        res.status(501).json({
            statuscode:501,
            error:error.message 
        })
     }
    })
    

export { routesProjects }
