import { MProject,MTask } from '../Models/index'

  MProject.hasMany(MTask,{ as:'tareas',foreignKey:'projectid' })
  MTask.belongsTo(MProject,{ foreignKey:'projectid' });
  
