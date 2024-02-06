import { DataTypes } from 'sequelize'
import sequelize from '../config/db'

const Rois = sequelize.define(
  'rois',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    investmentId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    investorId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    returnAmount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    returnDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    returnDateMonth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {

  }
)

Rois.sync().then(() => {}).catch((err: any) => {
  console.error('Error creating Rois table:', err)
})

export default Rois
