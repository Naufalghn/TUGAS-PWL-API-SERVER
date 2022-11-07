import { Sequelize } from "sequelize";

const db = new Sequelize('ghani','root','',{
    host : 'localhost',
    dialect: 'mysql'

});

export default db;