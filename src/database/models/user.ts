'use strict';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  number: string;
  password: string;
  role?: string;
  isVerified?: boolean;
  verificationToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

export default (sequelize: Sequelize) => {
  class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public number!: string;
    public password!: string;
    public role!: string;
    public isVerified!: boolean;
    public verificationToken!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      // define association here
    }
  }
  User.init(
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      verificationToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: true, // Adds createdAt and updatedAt columns
    }
  );
  return User;
};
