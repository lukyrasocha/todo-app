const express = require( "express" );
const bodyParser = require('body-parser');
const app = express();

const port = 5000; // default port to listen
import router from "./routers/todos.router"

app.get( "/api", function ( req, res ) {
    res.send( "Hello world!" );
});


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
