const { DataTypes } = require("sequelize");
import sequelize from "../config/db";

const Training = sequelize.define(
  "acresal_trainings",
  {
    training_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    agent_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: DataTypes.NOW,
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false
  }
);


Training.sync({ alter: true })
  .then(() => {
    console.log("Training table created or updated");
  })
  .catch((err: any) => {
    console.error("Error creating Training table:", err);
  });

export default Training;
