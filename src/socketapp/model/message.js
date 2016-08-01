module.exports = Message = function (message) {
  this.message = message;
};

Message.prototype.create = function () {
  var messageElement = document.createElement("div");
  messageElement.setAttribute('class', 'message');
  messageElement.innerText = this.message;

  return messageElement;
};
