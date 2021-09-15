import { Dtoprojects,IProjects } from '../Interfaces/index';
import {  MProject } from '../Models/index';

type ProcessType = 'getAll'|'create'|'remove'|'findone'|'update';

class Project {
  private _args: Dtoprojects | null
  
  constructor (args: Dtoprojects | null = null) {
    this._args=args;
  }
  
  process (
    type: ProcessType
  ):
    Promise<IProjects[]> |
    Promise<IProjects | null> |
    Promise<IProjects> |
    Promise<number | undefined> |
    undefined {
    switch (type) {

      case 'getAll':
        return this.getAll();
      case  'create':
        return this.create();
      case 'remove':
        return this.remove()
      case 'findone':
        return this.findOne()
      case 'update':
        return this.update()
      default:
        return undefined;
    }
  }
  
  private async create():Promise<IProjects>{
    try {
      const args = this._args as IProjects;
      const project =  new MProject(args);
      const result =  await project.save();
      return result;  
    } catch (error) {
      throw Error('No se ha podido crear el projecto');
    }
    
  }
  
  private async getAll (): Promise<IProjects[]> {
    try {
      const users = await MProject.findAll();
      return users;
    } catch (error) {
      console.error(error);
      throw new Error('There was a problem trying to get all the users');
    }
  }
  
  private async remove():Promise<number> {
    try {
      const args = this._args as IProjects;
      const result = await MProject.destroy({
        where:
        {
          id : args.id
        }
      })
      if(result == 0) throw Error()
      return result
    } catch (error) {
      throw new Error('No se pudo eliminar este elemento') 
    }
  }
 
  private async findOne():Promise<IProjects>{
    try {
      const args = this._args as IProjects;
      
      // const find = await MProject.findOne({
      //   where:{
      //     id:args.id
      //   }
      // })
      // return find?.get() as IProjects;
      const find = await MProject.findByPk(args.id);
      return find?.get() as IProjects;
      
    } catch (error) {
      throw new Error('No se ecuentra tal elemento')
    }
  }
  
  private async update():Promise<number>{
    try {
      const { id,...rest } = this._args as IProjects;
      
      const project = await MProject.update(rest, {
        where: {
          id
        }
      });
      if(project[0] == 0)throw new Error(`No existe el id ${id}`)
      return project[0];
      
    } catch (error:any) {
      throw new Error(error.message)
      
    }
  }
  
}

export { Project };
