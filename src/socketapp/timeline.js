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
