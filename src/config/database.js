const mysql = require('mysql2') // Importei o mysql2


// Aqui eu faço a conexão com o banco de dados
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Guel_.2009',
    database: 'bdwalmirbarber',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool.promise()
