import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/config';

class SchoolCycle extends Model { }

SchoolCycle.init({
    schoolcycleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, { sequelize, modelName: 'Schoolcycle' });

console.log(SchoolCycle === sequelize.models.SchoolCycle);
