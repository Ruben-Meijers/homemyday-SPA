var waypoint = new Waypoint({
  element: document.getElementById('endHeader'),
  handler: function (direction) {
    console.log(direction);
    notify("Test");
  }
});
