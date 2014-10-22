/**
 * Created by zou on 10/22/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wineSchema = new Schema({
    name:String,
    year:String,
    type:String,
    country:String,
    district:String
});

module.exports = mongoose.model('Wine', wineSchema);
