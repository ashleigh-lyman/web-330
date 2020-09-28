//import installed packages

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

//Create database connection to your Mongo Database
const FavoriteTeams = require('./models/favorite-teams');

//Enter mongodb communication link
const dbConn = 'mongodb+srv://web450_user:FWuaAiFNvNT1l5Mh@buwebdev-cluster-1.akyor.mongodb.net/Web450?retryWrites=true&w=majority';

//Connects to database
mongoose.connect(dbConn, { useNewUrlParser: true, useUnifiedTopology: true });

//get mongodb connection object. This allows us to handle network errors
let db = mongoose.connection;

//listen for errors
db.on('error', console.error.bind(console, 'MongoDB error'));

db.once('open', function() { console.log('Connection successful'); })

//gives you express app object to create routes later on
let app = express();


/*Api to return requested records in the database
Use FavoriteTeams model to call the find function
Leave find function brackets empty to request ALL
*/
app.get('/api/favorite-teams', async(req, res) => {
        try {
            FavoriteTeams.find({}, function(err, teams) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        'message': 'Error. '
                    })
                } else {
                    console.log(teams);
                    res.json(teams);
                }
            })
        } catch (e) {
            console.log(e);
            res.status(500).send({
                'message': 'Error'
            })
        }
    })
    //create new node.js server on port 3000. use callback function to display message
http.createServer(app).listen(3000, function() {
    console.log('App is running and listening on port 3000. ');
});