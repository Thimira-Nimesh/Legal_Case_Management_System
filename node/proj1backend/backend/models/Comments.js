module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    Commentbody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Case, {
      foriegnKey: "CaseId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Comments;
};
