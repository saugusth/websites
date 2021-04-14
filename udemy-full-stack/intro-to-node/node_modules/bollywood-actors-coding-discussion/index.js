const uniqueRandomArray = require('unique-random-array');
const bollywoodActors = require('./bollywood-actors.json');;

exports.all = bollywoodActors;
exports.random = uniqueRandomArray(bollywoodActors);
