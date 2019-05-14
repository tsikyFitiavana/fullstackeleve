// const express = require('express');
// const bodyParser = require('body-parser');

// const Client = require('./routes/routes');

// const dbConfig = require('./config/database.config.js');

// const mongoose = require('mongoose');
// // var MongoClient = require("mongodb").MongoClient;
// const app = express();

// app.use('/Client', Client);

// const port = 8080;

// app.listen(port, () => {

//     console.log('serveur démarré sur le port ' + port);
// });

// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });

// MongoClient.connect("mongodb://localhost/database", function(error, db) {
//     if (error) return funcCallback(error);

//     console.log("Connecté à la base de données 'database'");
// });

// get dependencies

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')

const app = express()
const methodOverride = require('method-override')
app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))

app.use(cors())
// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Configuring the database
const config = require('./config/database.config')
const mongoose = require('mongoose');
require('./routes/routes.js')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Client app"});
});


app.listen(8070, () => {
    console.log("Server is listening on port 8070");
});