module.exports = Userlist = function (userListElement) {
  this.list = userListElement;
};

Userlist.prototype.add = function (user) {
  var addElement = document.createElement("div");
  addElement.innerText = user.name;

  this.list.appendChild(addElement);
}
