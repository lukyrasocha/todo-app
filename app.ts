const express = require( "express" );
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

const port = 5000; // default port to listen
import router from "./routers/todos.router"

app.get( "/api", function ( req, res ) {
    res.send( "Hello world!" );
});


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect((err) => {
    if(!err) {
        console.log('Connection to MYSQL successful, fuck yes')
    } else{
        console.log('Connection failed:',err)
    }

})

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/api',router);
app.use(express.json())

app.post('/test', function(req, res){
    console.log("I am here")
    console.log(req.body);
    res.end("Done");
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
