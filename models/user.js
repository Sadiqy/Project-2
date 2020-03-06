module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
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
=======
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
  
>>>>>>> a44d518b772d24d78a3e215a7e6301a3fde0526f
