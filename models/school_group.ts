import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/config';

class SchoolGroup extends Model { }

SchoolGroup.init({
    schoolGroupId: {
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
}, { sequelize, modelName: 'SchoolGroup' });

console.log(SchoolGroup === sequelize.models.SchoolGroup);
