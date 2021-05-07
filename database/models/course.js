'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define(
    'Courses',
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      credits: DataTypes.INTEGER
    },
    {}
  );
  Courses.associate = function(models) {
    // associations can be defined here
    Courses.belongsToMany(models.Teachers, {
      through: 'CourseTeachers'
    });
  };
  return Courses;
};
