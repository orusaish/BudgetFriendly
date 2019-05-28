$.get("/users/data").then(function(data) {
  console.log(data);

  var name = data.name;
});
