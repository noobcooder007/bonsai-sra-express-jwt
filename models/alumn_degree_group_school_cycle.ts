import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/config';

class AlumnDegreeGroupSchoolCycle extends Model { }

AlumnDegreeGroupSchoolCycle.init({
    alumnDegreeGroupId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    schoolCycle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SchoolCycle',
            key: 'schoolCycleId'
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
    schoolDegree: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SchoolDegree',
            key: 'schoolDegreeId'
        }
    },
    schoolGroup: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SchoolGroup',
            key: 'schoolgroupId'
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
}, { sequelize, modelName: 'AlumnDegreeGroupSchoolCycle' });

console.log(AlumnDegreeGroupSchoolCycle === sequelize.models.AlumnDegreeGroupSchoolCycle);
