module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define(
      "User",
      {
        email: DataTypes.STRING,
        full_name: DataTypes.STRING,
        zipcode: DataTypes.INTEGER,
        fitness_goal: DataTypes.STRING
      },
      {
        timestamps: false
      }
    );
    return User;
  };