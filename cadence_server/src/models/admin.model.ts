import { DataTypes } from 'sequelize'
import sequelize from '../config/db'

const Admin = sequelize.define(
  'admin',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    UserID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {

  }
)

Admin.sync().then(() => {}).catch((err: any) => {
  console.error('Error creating Admin table:', err)
})

export default Admin
