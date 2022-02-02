import * as mysql from 'mysql';
import * as dotenv from 'dotenv';
import * as util from 'util';

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.query = util.promisify(connection.query).bind(connection);

connection.connect((err) => {
    if(!err) {
        console.log('Connection successful')
    } else{
        console.log('Connection failed:',err)
    }
})

export default connection;