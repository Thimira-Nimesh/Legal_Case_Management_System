module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define("Case", {
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
    CaseOwner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Case.associate = (models) => {
    Case.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };
  return Case;
};
