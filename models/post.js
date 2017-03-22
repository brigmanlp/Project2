module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Citizen Contribution", {
    featureName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    featureDetails: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Not Available"
    }
  });
  return Post;
};