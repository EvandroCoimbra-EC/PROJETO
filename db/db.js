const Sequelize = require('sequelize')


const sequelize = new Sequelize('api-comentario','root','1234',{
    host: "localhost",
    dialect: 'mysqul',
    query: {raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}