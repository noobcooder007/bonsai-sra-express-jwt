import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/config';

class SchoolDegree extends Model { }

SchoolDegree.init({
    schoolDegreeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
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
}, { sequelize, modelName: 'SchoolDegree' });

console.log(SchoolDegree === sequelize.models.SchoolDegree);
