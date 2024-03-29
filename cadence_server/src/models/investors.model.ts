import { DataTypes } from 'sequelize'
import sequelize from '../config/db'

const Investors = sequelize.define(
  'investors',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    UserID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Nationality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.STRING,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Amount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Duration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BankName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AccountNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AccountName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NOKFullName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NOKRelationship: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NOKPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NOKEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NOKAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserType: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {

  }
)

Investors.sync({ alter: true }).then(() => {}).catch((err: any) => {
  console.error('Error creating Investors table:', err)
})

export default Investors
