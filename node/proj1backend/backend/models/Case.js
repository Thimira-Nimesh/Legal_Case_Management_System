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
  });

  Case.associate = (models) => {
    Case.hasMany(models.Comments, {
      onDelete: "cascade",
    });

    Case.hasMany(models.Noted, {
      foriegnKey: {
        name: "CaseId",
      },
      onDelete: "cascade",
    });

    Case.belongsTo(models.Users, {
      foreignKey: "UserId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Case;
};
