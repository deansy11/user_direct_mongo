const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const data = require('./data');
const app = express();
const userRoute = require("./routes/users");
const indexRoute = require("./routes/index");
const client = require("./dbConnection");
const user = require("./models/users");

app.use(express.static(path.join(__dirname, 'public')));
app.use(indexRoute);
app.use(userRoute);

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.set('port', 3000);

if(require.main === module) {
  client.connect((client) => {
    app.listen(app.get("port"), err => {
      if (err) {
        throw err;
        exit(1);
      }
      console.log(  `Node running in mode @ http://localhost:${app.get("port")}`);
    })
  })
}

// dbClient.connect((client) => {
//
// })
//
// app.get('/:id', function(req, res){
//
//   let userData = data.users.find((el)=>{
//     return el.id == req.params.id;
//   });
// })

//   console.log(userData);
//
//   res.render('profile', userData)
// })
//
// app.listen(app.get('port'), function() {
//   console.log(
//     `Node running in mode @ http://localhost:${app.get("port")}`)
// });
