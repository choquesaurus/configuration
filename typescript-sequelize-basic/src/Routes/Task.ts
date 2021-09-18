/** @format */

import { Router, Response } from 'express'
import { logger } from '../lib/logger'
import { MTask , MProject } from '../Models/index'
// import { Project as ProjectController } from '../Controllers/index'
// import { Dtoprojects } from '../Interfaces/index'


const routesTask = Router()

routesTask
	.route('/')
	.get(async (_, res: Response): Promise<void> => {
		try {
            
            const all = await MTask.findAll({
                include:{
                    model:MProject
                }
            })
            
			res.status(200).json({ values: all })
		} catch (error) {
			logger.error(error)
		}
	})
    
	// .post(async (req: Request, res: Response): Promise<void> => {
	// 	try {
	// 		const data = req.body
	// 		const dto = new ProjectController(data as Dtoprojects)
	// 		const createProject = await dto.process('create')

	// 		res.status(200).json({ values: createProject })
	// 	} catch (error) {
	// 		logger.error(error)
	// 	}
	// })
    // routesTask
    // .route('/:id')
	// .get(async (req:Request,res:Response)=>{
	// 	try {
	// 		const dto = new ProjectController({ id:req.params.id })
	// 		const findone = await dto.process('findone');
	// 		res.status(200).json({ values: findone })
	// 	} catch (error:any) {
	// 		res.status(501).json({
	// 			statuscode:501,
	// 			error:error.message 
	// 		})
	// 	}
	// })
	// .put( async (req:Request,res:Response)=>{
	// 	try {
    //         const dto = new ProjectController({ id:req.params.id,...req.body })
	// 		const update = await dto.process('update')
	// 		res.status(200).json({ values: update })
			
	// 	} catch (error:any) {
	// 		res.status(501).json({
	// 			statuscode:501,
	// 			error:error.message 
	// 		})
	// 	}
	// })
    // .delete(async (req:Request , res:Response):Promise<void> => {
    //  try {
    //         const dto = new ProjectController({ id:req.params.id })
	// 		const createProject = await dto.process('remove')
	// 		res.status(200).json({ values: createProject })
            
    //  } catch (error:any) {

    //     res.status(501).json({
    //         statuscode:501,
    //         error:error.message 
    //     })
    //  }
    // })
    

export { routesTask }
