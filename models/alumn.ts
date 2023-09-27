import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/config';

class Alumn extends Model { }

Alumn.init({
    alumnId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstLastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondLastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    curp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    folio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Alumn'
});

console.log(Alumn === sequelize.models.Alumn);
