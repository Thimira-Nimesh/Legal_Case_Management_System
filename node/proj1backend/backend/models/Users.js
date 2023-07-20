module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nic: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    usertype: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    // Users.hasMany(models.Noted, {
    //   onDelete: "cascade",
    // });

    Users.hasMany(models.Case, {
      foreignKey: "UserId",
    });
  };

  return Users;
};
