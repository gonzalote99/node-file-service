const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
const fs = require('fs');

expressApp.set('view engine', 'pug');
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));

expressApp.get('/', (req, res) => {
res.render('form');
});

expressApp.post('/', (req, res) => {
  var formText = req.body.text;

  fs.writeFile("form.txt", formText, (error) => {
    if(error) {
      console.log(error);
    } else {
      console.log('file created')
    }
  });

  res.redirect("/");
});

expressApp.listen(3000, () => {
  console.log('listening in port 3000')
});