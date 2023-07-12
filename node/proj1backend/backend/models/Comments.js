module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    Commentbody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
