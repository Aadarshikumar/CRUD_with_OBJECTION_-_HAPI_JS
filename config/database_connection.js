const config = require("../knexfile")['development']  // imported only development part from knexfile
const knex = require("knex")(config)
module.exports = knex