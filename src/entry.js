var Man = require('./Man');
var Userlist = require('./Userlist');
var Button = require('./item/Button.js');
var WS = require('./websocket.js');

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
