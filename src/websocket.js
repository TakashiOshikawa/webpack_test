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
