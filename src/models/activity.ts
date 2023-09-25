import { DataTypes, Model } from 'sequelize';

class Activity extends Model { }

Activity.init({
    activityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    activityType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ActivityType',
            key: 'activityTypeId'
        }
    },
    subject: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Subject',
            key: 'subjectId'
        }
    },
    partial: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Partial',
            key: 'partialId'
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ponderation: {
        type: DataTypes.DOUBLE,
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
}, { sequelize, modelName: 'Activity' });

console.log(Activity === sequelize.models.Activity);
