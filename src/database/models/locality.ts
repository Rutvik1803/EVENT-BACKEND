'use strict';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface LocalityAttributes {
  id?: number;
  name: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface LocalityCreationAttributes extends Optional<LocalityAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

export default (sequelize: Sequelize) => {
  class Locality extends Model<LocalityAttributes, LocalityCreationAttributes> implements LocalityAttributes {
    public id!: number;
    public name!: string;
    public city!: string;
    public state!: string;
    public country!: string;
    public pincode!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      // define association here
    }
  }

  Locality.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        defaultValue: 'Ahmedabad',
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: 'Gujarat',
      },
      country: {
        type: DataTypes.STRING,
        defaultValue: 'India',
      },
      pincode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      sequelize,
      modelName: 'Locality',
      timestamps: true, // Adds createdAt and updatedAt columns
    }
  );

  return Locality;
};