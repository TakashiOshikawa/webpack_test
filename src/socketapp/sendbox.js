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
