const status = (sequelize, DataTypes) => {
  const Status = sequelize.define('status', {
    value: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  return Status;
};

export default status;
