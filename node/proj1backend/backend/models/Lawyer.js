module.exports = (sequelize, DataTypes) => {
  const Lawyer = sequelize.define("Lawyer", {
    LawyerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NIC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Lawyer;
};
