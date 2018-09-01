module.exports = function(sequelize, DataTypes) {
    var Argument = sequelize.define("Argument", {
      argument_title: DataTypes.STRING,
      argument_lineA: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      argument_lineB: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      argument_lineC: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      argument_author: DataTypes.STRING,
      argument_category: DataTypes.STRING,
    });
    return Argument;
  }