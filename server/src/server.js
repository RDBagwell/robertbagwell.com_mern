const http = require('http');
const app = require('./app');
const { 
    mysqlSyncAllTables, 
    mysqlAlterTables, 
    mysqlClearAllTables, 
    mysqlConnect 
} = require('../services/mysql_config');
const { mongoConnect } = require('../services/mongo_config');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
    // await mysqlAlterTables();
    await mongoConnect();
    server.listen(PORT, ()=>{
        console.log(`Listing on port ${PORT}...`);
    })
}
startServer();