import { DataTypes, Model } from 'sequelize';

class Partial extends Model { }

Partial.init({
    partialId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    schoolCycle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SchoolCycle',
            key: 'schoolcycleId'
        }
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    key: {
        type: DataTypes.ENUM,
        values: ['SEP-NOV', 'ENE-MAR', 'ABR-JUN'],
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
}, { sequelize, modelName: 'Partial', indexes: [{ unique: true, fields: ['schoolCycle', 'key'] }] });

console.log(Partial === sequelize.models.Partial);
