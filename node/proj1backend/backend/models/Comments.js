module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    Commentbody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Case, {
      foreignKey: "CaseId", // Use the correct spelling for "foreignKey"
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Comments;
};
