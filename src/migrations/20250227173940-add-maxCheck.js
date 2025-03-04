'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE Airplanes ADD CONSTRAINT check_capacity_max CHECK (capacity <= 1000);
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE Airplanes DROP CONSTRAINT check_capacity_max;
    `);
    
  }
};
