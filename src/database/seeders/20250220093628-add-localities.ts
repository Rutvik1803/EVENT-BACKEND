'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('Localities', [
      { name: 'Navrangpura', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380009', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ellisbridge', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380006', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Paldi', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380007', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Satellite', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380015', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vastrapur', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380015', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bodakdev', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380054', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Prahlad Nagar', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380015', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Maninagar', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380008', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bapunagar', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380024', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nikol', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '382350', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chandkheda', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '382424', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Motera', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380005', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Naroda', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '382330', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vatva', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '382440', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Isanpur', city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '382443', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('Localities', {}, {});
  }
};
