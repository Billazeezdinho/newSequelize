//import sequelize
const { Sequelize } = require('sequelize');



//create a new instance of sequelize 
const sequelize = new Sequelize('sql10759416', 'sql10759416', 'mjcnfa1VMt',{
    host: 'sql10.freesqldatabase.com',
    dialect:'mysql'
});

module.exports = sequelize;