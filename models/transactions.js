module.exports = function(sequelize, DataTypes) {
  var Transactions = sequelize.define("Transactions", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,

      len: [20]
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),

      allowNull: false
    }
  });

  Transactions.associate = function(models) {
    // We're saying that a Transactions should belong to an User
    // A Transaction can't be created without a User due to the foreign key constraint
    Transactions.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Transactions;
};
