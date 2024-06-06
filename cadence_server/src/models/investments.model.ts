import { DataTypes } from 'sequelize'
import sequelize from '../config/db'

const Investments = sequelize.define(
  'investments',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    investorId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Amount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Pending'
    }
  },
  {

  }
)

Investments.sync().then(() => { }).catch((err: any) => {
  console.error('Error creating Investments table:', err)
})

export default Investments
