const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

var users = [
  {id: 1, name: 'minh'},
  {id: 2, name: 'hanh'}
];

var lists = [
  'Đi chợ', 'Nấu cơm', 'Rửa bát', 'Học Code trên CoderX'
]

app.get('/', function (req, res) {
  res.render('index', {
    users: users
  });
})

app.get('/search', function (req, res) {
  var nameUser = req.query.name;
  var filter = users.filter(function (x) {
    return x.name.indexOf(nameUser.toLowerCase()) !== -1;
  });

  res.render('index', {
    users: filter
  });

})

app.get("/todos", function(req, res) {
  var query = req.query.q;

  var filter = lists.filter (function (x) {
    return x.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }); 

  return res.render('todos', {
    lists: filter
  }
  );
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
