// Assuming you have Sequelize imported and your database connection set up

const { DataTypes } = require('sequelize');
import sequelize from "../config/db";

const Farmers = sequelize.define('`acresal_farmers`', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    farmersPhoto: {
        type: DataTypes.STRING, // You might consider storing the path to the photo
        allowNull: true
    },
    residentialAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stateOfResidence: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LGAOfResidence: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ward: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options
});

// Synchronize the model with the database
Farmers.sync({ alter: true })
    .then(() => {
        console.log('Farmers table created or updated');
    })
    .catch((err: any) => {
        console.error('Error creating Farmers table:', err);
    });

export default Farmers;
