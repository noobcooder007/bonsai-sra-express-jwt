import { DataTypes, Model } from 'sequelize';

class Subject extends Model { }

Subject.init({
    subjectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topic: {
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
}, { sequelize, modelName: 'Subject' });

console.log(Subject === sequelize.models.Subject);
