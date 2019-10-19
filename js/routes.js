
Path.map('#/charts').to(function() {
  
    $("#content").load("./charts.html");
});

Path.map('#/tables').to(function() {
 
    $("#content").load("./tables.html");
});

Path.map('#/register').to(function() {
  
    $("#content").load("./register.html");
});

Path.map('#/forgot-password').to(function() {
  
    $("#content").load("./forgot-password.html");
});

Path.map('#/index').to(function() {
 
    $("#logoutDiv").load("./index.html");
});

Path.listen();