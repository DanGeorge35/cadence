import { DataTypes } from 'sequelize'
import sequelize from '../config/db'

const Referral = sequelize.define(
  'referrals',
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

Referral.sync().then(() => {}).catch((err: any) => {
  console.error('Error creating Referral table:', err)
})

export default Referral
