import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const User = sequelize.define('auth', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  UserID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  FirstName: {
    type: DataTypes.STRING
  },
  LastName: {
    type: DataTypes.STRING
  },
  Email: {
    type: DataTypes.STRING
  },
  Role: {
    type: DataTypes.STRING
  },
  TargetRole: {
    type: DataTypes.STRING
  },
  UserType: {
    type: DataTypes.STRING
  },
  PasswordHash: {
    type: DataTypes.STRING
  },
  PasswordSalt: {
    type: DataTypes.STRING
  },
  RefreshToken: {
    type: DataTypes.STRING
  },
  Token: {
    type: DataTypes.STRING
  },
  TokenCreated: {
    type: DataTypes.STRING
  },
  TokenExpires: {
    type: DataTypes.STRING
  },
  Verified: {
    type: DataTypes.TINYINT
  },
  CreatedAT: {
    type: DataTypes.STRING
  },
}, {
  // Other model options go here
  timestamps: false
});

// console.log(User === sequelize.models.User);

export default User;  