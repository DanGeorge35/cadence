import { DataTypes } from 'sequelize'
import sequelize from '../config/db'

const Transactions = sequelize.define(
  'transactions',
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
    investmentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
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

Transactions.sync().then(() => {}).catch((err: any) => {
  console.error('Error creating Transactions table:', err)
})

export default Transactions
