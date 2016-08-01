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

	var Man = __webpack_require__(2);
	var Userlist = __webpack_require__(3);
	var Button = __webpack_require__(4);
	var WS = __webpack_require__(5);

	var mainContents = document.getElementById("main-contents");
	var userListElement = document.createElement("div");
	userListElement.setAttribute("id", "user_list");
	var userList = new Userlist(userListElement);
	var m = new Man('Taro', 30);
	console.log(m.greet());
	var m2 = new Man('takashi', 22);
	// console.log(m2.greet());
	// console.log(m2.say());

	userList.add(m2);
	userList.add(m);
	userList.add(m2);
	mainContents.appendChild(userList.list);

	var btn = new Button();
	// b2 = btn.make(userList.add, m2);
	// mainContents.appendChild(btn.make("userList.add", document.createElement("button"), mainContents));
	console.log(mainContents);
	mainContents.appendChild(btn.make("userList.add", document.createElement("button"), mainContents));


	var ws = new WS();
	ws.start();

	// userList.appendChild(b2);

	// var main_contents = document.getElementById("main-contents");
	// var addElement = document.createElement("div");
	// addElement.innerText = 'Sad song';
	// main_contents.appendChild(addElement);


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Man = function(name, age) {
	  this.name = name;
	  this.age = age;
	};

	Man.prototype.greet = function () {
	  return 'Hello, my name is ' + this.name + ', I\'m ' + this.age + ' years old';
	};

	Man.prototype.say = function () {
	  return 'Listen everybody. I am a ' + this.name;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Userlist = function (userListElement) {
	  this.list = userListElement;
	};

	Userlist.prototype.add = function (user) {
	  var addElement = document.createElement("div");
	  addElement.innerText = user.name;

	  this.list.appendChild(addElement);
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Button = function () {};

	Button.prototype.make = function (f, user, userList) {
	  var buttonElement = document.createElement("button");
	  buttonElement.innerText = "ボタン";

	  if (f != undefined) {
	    // buttonElement.setAttribute("name", f);
	    buttonElement.addEventListener('click', function () {
	      var userList = document.getElementById("user_list");
	      console.log(userList);
	      userList.appendChild(user);
	      userList.innerHtml = userList.list;
	      var main_contents = document.getElementById("main-contents");
	      main_contents.innerHtml = userList.list;
	    }, false);
	  }

	  return buttonElement;
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = WS = function () {};

	WS.prototype.start = function () {
	  var connection = new WebSocket('ws://ttt.cooooooooo');

	  // コネクション確立時の処理
	  connection.onopen = function () {
	    console.log('ping');
	    connection.send('ping');
	  };

	  // コネクションエラー時の処理
	  connection.onerror = function () {
	    console.log('errrrrrrrrrrrrrrroorr');
	  };
	}


/***/ }
/******/ ]);