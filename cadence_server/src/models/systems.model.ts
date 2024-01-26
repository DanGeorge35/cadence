import { DataTypes } from 'sequelize'
import sequelize from '../config/db'

const Systems = sequelize.define(
  'systems',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    targetAmt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalActiveAmount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    minInv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maxInv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {

  }
)

Systems.sync().then(() => {}).catch((err: any) => {
  console.error('Error creating Systems table:', err)
})

export default Systems
