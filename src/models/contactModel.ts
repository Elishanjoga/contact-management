// models/User.js
import { DataType, DataTypes } from "sequelize";

import { sequelize } from "../configs/dbConnection";
import { v4 as uuidv4 } from "uuid";

export const User = sequelize.define(
  "User",
  {
    // Define attributes
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options
    timestamps: true,
    freezeTableName: true,
  }
);
