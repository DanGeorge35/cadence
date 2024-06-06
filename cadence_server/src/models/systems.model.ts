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
    UnitPeriod: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {

  }
)

Systems.sync({ alter: true }).then(async () => {
  const count = await Systems.count()
  if (count === 0) {
    await Systems.create({ targetAmt: '1000000000', totalActiveAmount: '0', minInv: '500000', maxInv: '5000000', roi: '4.15', UnitPeriod: '1' })
  }
}).catch((err: any) => {
  console.error('Error creating Systems table:', err)
})

export default Systems
