module.exports = function(sequelize, DataTypes) {
  var citizencontribution = sequelize.define("citizencontribution", {
    FeatureName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Theme: {
      type: DataTypes.STRING,
      defaultValue: "Not Available"
    },
    FeatureLocation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    FeatureDetails: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
     Latitude: {
      type: DataTypes.DECIMAL(12, 10),
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    Longitude: {
      type: DataTypes.DECIMAL(12, 10),
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    Image1Name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    Image1Path: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    Image1Description: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    Link1Name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    Link1Path: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    Link1Description: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    }
  });

  return citizencontribution;
  citizencontribution.sync();
  module.exports = citizencontribution;
};