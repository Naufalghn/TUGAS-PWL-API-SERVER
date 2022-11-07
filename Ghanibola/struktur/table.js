import { Sequelize } from "sequelize";
import db from "../configurasi/config.js";

const {DataTypes} = Sequelize;

const List = db.define('team',{
    jadwal: DataTypes.STRING,
    pemain: DataTypes.STRING
},{
    freezeTableName:true
});

export default List;

(async()=>{
    await db.sync();
})();
