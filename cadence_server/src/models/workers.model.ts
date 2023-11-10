import { DataTypes } from 'sequelize'
import sequelize from '../config/db'

const Workers = sequelize.define(
  'workers',
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
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Role: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Whatsapp: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {

  }
)

Workers.sync().then(() => {}).catch((err: any) => {
  console.error('Error creating Workers table:', err)
})

export default Workers
