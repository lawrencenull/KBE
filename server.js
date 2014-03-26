var express             = require('express');
var knowledge_extractor = require('./KBE');
var app                 = express();

KBE = new knowledge_extractor();
KBE.start();

console.log('Knolwedge Scrapper Server Started at localhost:8080');
exports = module.exports = app;