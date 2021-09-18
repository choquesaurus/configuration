/** @format */

import { Router, Response, Request } from 'express'
import { logger } from '../lib/logger'
import { Project as ProjectController } from '../Controllers/index'
import { Dtoprojects } from '../Interfaces/index'
import { MProject , MTask } from '../Models/index'
import { Op } from 'sequelize'
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

routesProjects.get('/all',async (_,res:Response): Promise<void> => { 
	try {
		
		const all = await MProject.findAll({
			where:{
			deliverydate:{
				[Op.gte]:'2021-12-24'
			}	
			},
			include:{
				model:MTask,
				attributes:['name','description','done'],
				as:'tareas'
			},
		})
		res.status(200).json({ values: all })
		
	} catch (error:any) {
		res.status(501).json({
			statuscode:501,
			error:error.message 
		})
	}
})

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
	.get(async (req:Request,res:Response)=>{
		try {
			const dto = new ProjectController({ id:req.params.id })
			const findone = await dto.process('findone');
			res.status(200).json({ values: findone })
		} catch (error:any) {
			res.status(501).json({
				statuscode:501,
				error:error.message 
			})
		}
	})
	.put( async (req:Request,res:Response)=>{
		try {
            const dto = new ProjectController({ id:req.params.id,...req.body })
			const update = await dto.process('update')
			res.status(200).json({ values: update })
			
		} catch (error:any) {
			res.status(501).json({
				statuscode:501,
				error:error.message 
			})
		}
	})
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
