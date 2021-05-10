'use strict';
module.exports = (sequelize, DataTypes) => {
  const courseTeachers = sequelize.define(
    'courseTeachers',
    {
      teacherId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER
    },
    {}
  );
  courseTeachers.associate = function(models) {
    // associations can be defined here
    courseTeachers.belongsTo(models.courses);
    courseTeachers.belongsTo(models.teachers);
  };
  return courseTeachers;
};
