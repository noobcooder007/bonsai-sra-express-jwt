import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sra-database', 'sra-user', '123456', {
    host: '127.0.0.1',
    dialect: 'postgres'
});

export const dbConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established sucessfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}