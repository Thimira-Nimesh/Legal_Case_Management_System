module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    AppointmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AppointmentStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Appointment.associate = (models) => {
    Appointment.belongsToMany(models.Users, {
      through: "AppointmentUsers", // This is the intermediate table name
      foreignKey: "AppointmentId",
    });
  };

  return Appointment;
};
