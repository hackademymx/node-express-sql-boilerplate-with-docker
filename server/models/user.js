const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    }
  });

  User.associate = models => {
    User.hasMany(models.Ticket, { onDelete: 'CASCADE' });
  };

  return User;
};

export default user;
