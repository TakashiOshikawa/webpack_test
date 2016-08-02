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
