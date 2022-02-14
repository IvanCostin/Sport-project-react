const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '185.89.4.36',
	     user: 'datiboprod_soc',
	     password: 'Zxcvbnm123',
	     database: 'datiboprod_soccer',
    multipleStatements: true
});

module.exports = { connection };
