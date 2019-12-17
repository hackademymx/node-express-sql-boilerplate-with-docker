const employee = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Employee.associate = models => {
    Employee.hasMany(models.Ticket);
  };

  return Employee;
};

export default employee;
