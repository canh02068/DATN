const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1234567890',
  database: 'mypham'
})

module.exports = connection;