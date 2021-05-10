'use strict';
module.exports = (sequelize, DataTypes) => {
  const teachers = sequelize.define(
    'teachers',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {}
  );
  teachers.associate = function(models) {
    // associations can be defined here
    teachers.belongsToMany(models.courses, {
      through: 'courseTeachers'
    });
  };
  return teachers;
};
