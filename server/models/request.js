const request = (sequelize, DataTypes) => {
  const Request = sequelize.define('request', {
    value: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  return Request;
};

export default request;
