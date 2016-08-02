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

	var ws = new WS();
	ws.init();




	// var uri = "ws://localhost:9000";
	//
	// // WebSocketオブジェクト
	// var webSocket = null;
	//
	// webSocket = new WebSocket(uri);
	// // イベントハンドラの設定
	// webSocket.onopen = onOpen;
	// webSocket.onmessage = onMessage;
	// webSocket.onclose = onClose;
	// webSocket.onerror = onError;
	//
	//
	// // 接続イベント
	// function onOpen(event) {
	//     console.log('oooopen');
	// }
	//
	// // メッセージ受信イベント
	// function onMessage(event) {
	//     if (event && event.data) {
	//         console.log('messsssage');
	//     }
	// }
	//
	// // エラーイベント
	// function onError(event) {
	//     console.log('errrrororrororo');
	// }
	//
	// // 切断イベント
	// function onClose(event) {
	//     console.log('clooooooose');
	//     webSocket = null;
	//     setTimeout("open()", 3000);
	// }


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

	Timeline.prototype.messageReceive = function (message) {
	  var message = new Message(message);

	  var timeline = new Timeline();
	  var timelineElement = timeline.get();

	  timelineElement.appendChild(message.create());
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Sendbox = function () {};

	Sendbox.prototype.send = function () {
	  var msg = document.getElementById('send-text');
	  var message = new Message(msg.value);

	  var timeline = new Timeline();
	  var timelineElement = timeline.get();

	  var conn = new WS();
	  conn.connection.send(msg.value);

	  msg.value = '';
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

	  // シングルトン
	  if (typeof WS.instance === "object"){
	    return WS.instance;
	  }

	  this.connection = null;

	  // キャッシュする
	  WS.instance = this;
	  return this;
	};

	WS.prototype.init = function (routing) {
	  this.connection = new WebSocket('ws://localhost:9000');

	  // コネクション確立時の処理
	  this.connection.onopen = function () {
	    console.log('open');
	  };

	  // コネクションエラー時の処理
	  this.connection.onerror = function () {
	    console.log('error');
	  };

	  this.connection.onmessage = function (event) {
	    var timeline = new Timeline();
	    timeline.messageReceive(event.data)
	  };

	  this.connection.onclose = function (event) {
	    console.log('close');
	    this.connection = null;
	  };

	};


/***/ }
/******/ ]);