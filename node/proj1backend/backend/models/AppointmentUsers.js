// models/appointmentUsers.js

module.exports = (sequelize, DataTypes) => {
  const AppointmentUsers = sequelize.define("AppointmentUsers", {
    // You can define any additional fields specific to this association if needed
  });

  return AppointmentUsers;
};
