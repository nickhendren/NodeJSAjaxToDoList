var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var ejs        = require('ejs');
var ejsLayotus = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var logger     = require('morgan');
var port       = process.env.PORT || 3000;
var todoRoutes = require('./routes/todo_routes.js');
var Todo       = require('./models/todo.js');

//connect to mongo db
mongoose.connect('mongodb://localhost/todosdb');

<<<<<<< HEAD
=======
//create 1 Todo item in db
>>>>>>> 377055b048612119c80da16cc798d296de50441b
var todo1 = new Todo({
  text: "Milk",
	done: true
});

todo1.save(function(err){
  console.log("To do item added");
});

<<<<<<< HEAD
app.get('/api/todos', todoRoutes);
=======
app.use('/', todoRoutes);

//Static page, root route shows index.html
app.use(express.static('public'))
>>>>>>> 377055b048612119c80da16cc798d296de50441b

app.listen(port, function(){
  console.log('Listening on port ' + port);
})
