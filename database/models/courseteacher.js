'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseTeachers = sequelize.define(
    'CourseTeachers',
    {
      teacherId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER
    },
    {}
  );
  CourseTeachers.associate = function(models) {
    // associations can be defined here
    CourseTeachers.belongsTo(models.Courses);
    CourseTeachers.belongsTo(models.Teachers);
  };
  return CourseTeachers;
};
