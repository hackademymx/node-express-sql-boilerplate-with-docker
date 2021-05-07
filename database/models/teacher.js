'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teachers = sequelize.define(
    'Teachers',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {}
  );
  Teachers.associate = function(models) {
    // associations can be defined here
    Teachers.belongsToMany(models.Courses, {
      through: 'CourseTeachers'
    });
  };
  return Teachers;
};
