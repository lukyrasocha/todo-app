const express = require( "express" );
const app = express();
const port = 5000; // default port to listen
import router from "./routers/todos.router"

app.get( "/api", function ( req, res ) {
    res.send( "Hello world!" );
});

app.use('/api',router);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
