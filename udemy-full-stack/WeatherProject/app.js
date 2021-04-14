const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html")

});

app.post("/",function(req, res){
  const query = req.body.cityName;
  const apiKey = "bcc4394ed705c90857bdecae6ee278c0";
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"
      res.write("<p>The weather is currently " + desc +"</p>");
      res.write("<h1>The temp in " + query +" is "+ temp + " degrees farenheit</h1>");
      res.write("<img src =" + icon + ">");
      res.send();
    });
  });
});





app.listen(3000, function() {
  console.log("sever is running on port 3000")
});
