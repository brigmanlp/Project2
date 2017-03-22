module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", { //update to match our green table data 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        }
    });
    return Post;
};