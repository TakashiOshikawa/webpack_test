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
