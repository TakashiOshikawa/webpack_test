/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Message = __webpack_require__(2);
	var Timeline = __webpack_require__(3);
	var Sendbox = __webpack_require__(4);
	var WS = __webpack_require__(5);

	var timeline = new Timeline();
	timeline.init();

	var sendbox = new Sendbox();
	sendbox.initBox();


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Message = function (message) {
	  this.message = message;
	};

	Message.prototype.create = function () {
	  var messageElement = document.createElement("div");
	  messageElement.setAttribute('class', 'message');
	  messageElement.innerText = this.message;

	  return messageElement;
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Timeline = function () {};

	Timeline.prototype.init = function () {
	  var contents = document.getElementById('contents');
	  var timeline = document.createElement("div");
	  timeline.setAttribute('id', 'timeline');

	  contents.appendChild(timeline);
	};

	Timeline.prototype.get = function () {
	  var timeline = document.getElementById("timeline");

	  return timeline;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Sendbox = function () {};

	Sendbox.prototype.send = function () {
	  var msg = document.getElementById('send-text');
	  var message = new Message(msg.value);
	  msg.value = '';

	  var timeline = new Timeline();
	  var timelineElement = timeline.get();

	  timelineElement.appendChild(message.create());
	};

	Sendbox.prototype.initBox = function () {
	  var sendbox = document.getElementById('sendbox');
	  var input = document.createElement('input');
	  var button = document.createElement('button');

	  input.setAttribute('type', 'text');
	  input.setAttribute('id', 'send-text');
	  button.innerText = 'ボタン';
	  button.addEventListener('click', this.send, false);

	  sendbox.appendChild(input);
	  sendbox.appendChild(button);
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = WS = function () {
	  this.connection = nil;
	};

	WS.prototype.init = function (routing) {
	  this.connection = new WebSocket('ws://ttt.cooooooooo');

	  // コネクション確立時の処理
	  this.connection.onopen = function () {
	    console.log('ping');
	    connection.send('ping');
	  };

	  // コネクションエラー時の処理
	  this.connection.onerror = function () {
	    console.log('errrrrrrrrrrrrrrroorr');
	  };

	  this.connection.onMessage = function (event) {
	    console.log(event.data);
	  };
	};


/***/ }
/******/ ]);