'use strict';
module.exports = (sequelize, DataTypes) => {
  const courses = sequelize.define(
    'courses',
    {
      name: DataTypes.STRING,
      credits: DataTypes.INTEGER
    },
    {}
  );
  courses.associate = function(models) {
    // associations can be defined here
    courses.belongsToMany(models.teachers, {
      through: 'courseTeachers'
    });
  };
  return courses;
};
