const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.users = require('./user.model.js')(sequelize, Sequelize);

// Sync database tables
db.sequelize.sync({ force: true }).then(() => {
    console.log('✅ Tables synced successfully.');
});

module.exports = db;