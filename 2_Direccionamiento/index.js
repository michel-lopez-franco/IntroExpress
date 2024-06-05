
const express = require('express')
const app = express()
const port = 3001

//This example shows a middleware function with no mount path.
app.use((req, res, next) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('--------------------------------------------')
    console.log('Time:', today)
    console.log('Time:', today.toUTCString() ) 
    
    next()
})

//no se deriva de ningún método HTTP. Este método se utiliza para cargar funciones de middleware en una vía de acceso para todos los métodos de solicitud.
app.all('/', function (req, res, next) {
    console.log('Accessing the secret section ...');
    //res.send('Hello Secret Section!')
    next(); // pass control to the next handler
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// POST method route
app.post('/', express.json(), function (req, res) {
    console.log('POST request to the homepage');
    console.log(req.body);
    const a = req.body['a']
    const b = req.body['b']
    console.log('Resultado: '+ (a + b) );
    // Access the JSON data from the request
    // Example: const name = req.body.name;

    res.send('POST request to the homepage: '+ (a + b));
});

//Una matriz de funciones de devolución de llamada puede manejar una ruta. Por ejemplo
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');
}

var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

//app.use(myLogger);
app.use('/example/c',myLogger);

app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/d', (req,res) =>{
    console.log('Hello from D!');
    res.send('Hello from D!');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

