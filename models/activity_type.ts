import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/config';

class ActivityType extends Model { }

ActivityType.init({
    activityTypeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM,
        values: ['tarea', 'actividad'],
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
}, { sequelize, modelName: 'ActivityType' });

console.log(ActivityType === sequelize.models.ActivityType);
