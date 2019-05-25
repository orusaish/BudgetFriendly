module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [50]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [25]
    }
  });

  User.associate = function(models) {
    // Associating User with Transactions
    // When a User is deleted, also delete any associated Transactions
    User.hasMany(models.Transactions, {
      onDelete: "cascade"
    });
  };

  return User;
};
