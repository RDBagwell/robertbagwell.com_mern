const { Sequelize } = require('sequelize');

const db = process.env.MYSQL_DATABASE;
const db_username = process.env.MYSQL_USERNAME;
const db_password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT;

const sequelize = new Sequelize(db, db_username, db_password, {
    host: host,
    port: port,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'mysql',
    // ssl: 'Amazon RDS',
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: 'en',
  });

async function mysqlConnect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

async function mysqlSyncAllTables() {
  sequelize.sync()
}

async function mysqlClearAllTables() {
  sequelize.sync({ force: true })
}

async function mysqlAlterTables() {
  sequelize.sync({ alter: true })
}

async function mysqlDisconnect() {
    await sequelize.close();
}

module.exports = {
    mysqlConnect,
    mysqlDisconnect,
    mysqlSyncAllTables,
    mysqlClearAllTables,
    mysqlAlterTables,
    sequelize
}