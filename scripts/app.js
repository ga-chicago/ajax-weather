// namespace 'app'
var app = app || {};
// fetch the weather
app.fetchWeather = function() {

  $.getJSON("url", function(data) {
    // things to do with the data!
  });

};
// render the weather
app.renderWeather = function(weatherData) {


};
// when the document is ready
$(document).ready(function() {
  console.log("let's get ready to rumble!");
  var weatherData = app.fetchWeather();
});
