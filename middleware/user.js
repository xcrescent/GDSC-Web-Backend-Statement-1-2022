const fs = require("fs")
const createDB = require("./dbsql")
var x = 0
createDB.createDB();
const userCreate = (usrname) =>{ 
    
    fs.readFile('./data/no.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        x = parseInt(data)
        console.log(`x is ${x}`)
        fs.writeFile(`./data/${usrname}.json`, '', function (err) {
            if (err) throw err;
            createDB.createTable
            console.log('File is created successfully.');
            fs.writeFile(`./data/no.txt`, `${x+1}`, function (err) {
                if (err) throw err;
            });
        });
    });   
}

// add a todo item //
var addTodo = (title) => {
  var todos = fetchTodos();
  var todo = {title};
  var duplicatetodos = todos.filter((todo) => todo.title === title);
  if (duplicatetodos.length === 0) {
    todos.push(todo);
    saveTodos(todos);
    return todo;
  }
};

// delete a todo item //
var deleteTodo = (title) => {
  var todos = fetchTodos();
  var filteredtodos = todos.filter((todo) => todo.title !== title);
  saveTodos(filteredtodos);
  return todos.length !== filteredtodos.length;
};

// utility functions
var fetchTodos = (username) => {
  try {
    var todosString = fs.readFileSync(`./data/${username}.json`);
    return JSON.parse(todosString);
  } catch (e) {
    return [];
  }
};

var saveTodos = (todos) => {
  fs.writeFileSync(`./data/${username}.json`, JSON.stringify(todos));
};

  
module.exports = {userCreate, addTodo, deleteTodo};