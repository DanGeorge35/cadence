import { Sequelize } from "sequelize";

const sequelize = new Sequelize("acresal", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

try {
   sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
   sequelize.close();
}

export default sequelize;
