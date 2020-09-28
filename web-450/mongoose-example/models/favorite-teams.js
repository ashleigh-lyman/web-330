//import packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//This is telling mongoose how to map to the collection created in Mongodb
const FavoriteTeamsSchema = new Schema({
    teamId: { type: String },
    mascot: { type: String }
}, { collection: "favoriteTeams" });


//The schema points to the previous schema
//This allows us to use this code in other areas of application
module.exports = mongoose.model('Favorite Teams', FavoriteTeamsSchema);