
import {  Model, DataTypes,Optional } from 'sequelize';
import sequelizeConnection from  '../DB/connection';
import { ITask } from '../Interfaces/index';

interface ProjectsCreationAttributes extends Optional<ITask, 'description'> {} 

class Task extends Model<ITask, ProjectsCreationAttributes>
  implements ITask {
    public id!          : string;
    
    public name!        : string;
    
    public done!    : boolean;
    
    public description! : string;
    
    public projectid!: string;
    
  }
  
  const MTask = Task.init(
      {
      id:{
          type: DataTypes.STRING(10),
          primaryKey:true
      },
      name:{
          type:DataTypes.TEXT,
          allowNull:false
      },
      done:{
          type:DataTypes.BOOLEAN,
          allowNull:false
      },
      description:{
        type:DataTypes.TEXT,
        defaultValue:''
      },
      projectid:{
        type:DataTypes.TEXT
      }
    },
      {
        sequelize:sequelizeConnection,
        tableName:'tasks',
        // underscored:true
          
    }
  );
  
  
  // MTask.belongsTo(MProject,{ foreignKey:'projectid' });
  export default MTask;
//   module.exports = { MTask };
  
  
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