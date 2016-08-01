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
