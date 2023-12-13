const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('genre', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    name: {
      type: DataTypes.STRING(8),
      allowNull: false,
    }
  }, 
  { timestamps: false })
}