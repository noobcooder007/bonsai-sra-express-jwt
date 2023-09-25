import { DataTypes, Model } from 'sequelize';

class ActivityAlumn extends Model { }

ActivityAlumn.init({
    activityAlumnId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    activity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Activity',
            key: 'activityId',
        }
    },
    alumn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Alumn',
            key: 'alumnId'
        }
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
}, { sequelize, modelName: 'ActivityAlumn' });

console.log(ActivityAlumn === sequelize.models.ActivityAlumn);
