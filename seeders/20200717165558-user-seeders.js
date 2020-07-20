'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
          name:"hariyanto",
          profession: "Pengangguran",
          role:"admin",
          email:"hariyantolikeipa@gmail.com",
          password:await bcrypt.hash('hariyanto20172215039', 10),
          created_at: new Date(),
          updated_at: new Date()
      },
      {
        name:"impor",
        profession: "Pengangguran",
        role:"student",
        email:"hariyanto@gmail.com",
        password:await bcrypt.hash('hariyanto20172215039', 10),
        created_at: new Date(),
        updated_at: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
