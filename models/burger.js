// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    insertOne: (vals, cb) => {
        orm.insertOne(vals, (res) => {
            cb(res);
        });
    },
    updateOne: (cb) => {
        orm.updateOne((res) => {
            cb(res);
        });
    }
};

module.exports = burger;