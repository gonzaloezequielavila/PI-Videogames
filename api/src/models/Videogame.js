const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plarforms: {
      type:DataTypes.ENUM('PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch', 'iOS', 'Android'),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    launch_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,

    },
  },
  { timestamps: false });
};
