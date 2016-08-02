var Message = require('./model/message.js');
var Timeline = require('./timeline.js');
var Sendbox = require('./sendbox.js');
var WS = require('./websocket.js');

var timeline = new Timeline();
timeline.init();

var sendbox = new Sendbox();
sendbox.initBox();

var ws = new WS();
ws.init();
