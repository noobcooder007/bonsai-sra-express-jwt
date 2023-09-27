import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/config';

class Attendance extends Model { }

Attendance.init({
    attendanceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    partial: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Partial',
            key: 'partialId'
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
    assist: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    date: {
        type: DataTypes.DATE,
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
}, { sequelize, modelName: 'Attendance' });

console.log(Attendance === sequelize.models.Attendance);
