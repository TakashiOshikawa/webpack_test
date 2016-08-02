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
