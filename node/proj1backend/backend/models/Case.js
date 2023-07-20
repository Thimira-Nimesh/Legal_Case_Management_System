module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define("Case", {
    CaseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    CaseCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CaseFile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CaseTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CaseLawyer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserId: {
      // Add the foreign key "UserId"
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Case.associate = (models) => {
    Case.hasMany(models.Comments, {
      foreignKey: "CaseId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Case.belongsTo(models.Users, {
      foreignKey: "UserId", // Use the correct foreign key "UserId"
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Case;
};
