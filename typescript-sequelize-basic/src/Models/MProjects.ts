
import {  Model, DataTypes,Optional } from 'sequelize';
import sequelizeConnection from  '../DB/connection';
import { IProjects } from '../Interfaces/index';


interface ProjectsCreationAttributes extends Optional<IProjects, 'description'> {} 

class Project extends Model<IProjects, ProjectsCreationAttributes>
  implements IProjects {
    public id!          : string;
    
    public name!        : string;
    
    public priority!    : number;
    
    public description! : string;
    
    public deliverydate!: string;
    
  }
  
  const MProject = Project.init(
      {
      id:{
          type: DataTypes.CHAR(10),
          primaryKey:true
      },
      name:{
          type:DataTypes.TEXT,
          allowNull:false
      },
      priority:{
          type:DataTypes.INTEGER,
          allowNull:false
      },
      description:{
        type:DataTypes.TEXT,
        defaultValue:''
      },
      deliverydate:{
        type:DataTypes.DATE
        
      }
    },
      {
        sequelize:sequelizeConnection,
        tableName:'proyectos'
      }
  );
  
  export { MProject };
  
  
// async function doStuffWithUserModel() {
    
// 	const newUser = await Proyectos.create({
// 		name         : 'Johnny',
// 		preferredName: 'John',
// 	});
// 	console.log(newUser.id, newUser.name, newUser.preferredName);

// 	const foundUser = await Proyectos.findOne({ where: { name: 'Johnny' } });
// 	if (foundUser === null) return;
// 	console.log(foundUser.name);
// }