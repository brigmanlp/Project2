module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Citizen Contribution", {
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
      type: DataTypes.NUMERIC,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Longitude: {
      type: DataTypes.NUMERIC,
      allowNull: false,
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
    Image2Path: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    Image2Description: {
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
    },
    Link2Path: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    Link2Description: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    }
  });

  return Post;
};