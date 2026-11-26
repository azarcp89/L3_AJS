var BASE = 'https://jsonplaceholder.typicode.com';

function cutUsers(users) {
    var result = [];
    for (var i = 0; i < users.length; i++) {
        result.push({
            id: users[i].id,
            name: users[i].name,
            username: users[i].username,
            email: users[i].email,
            phone: users[i].phone
        });
    }
    return result;
}

function getUsers() {
    return fetch(BASE + '/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            return cutUsers(users);
        });
}

function filterTodos(todos) {
    return todos.filter(function (todo) {
        return todo.completed === false;
    });
}

function getTodos() {
    return fetch(BASE + '/todos')
        .then(function (response) {
            return response.json();
        })
        .then(function (todos) {
            return filterTodos(todos);
        });
}

getUsers()
    .then(function (data) {
        console.log('2b.i-users:', data);
    })
    .catch(function (error) {
        console.log('Ошибка в 2b.js (users):', error);
    });

getTodos()
    .then(function (data) {
        console.log('2b.ii-todos:', data);
    })
    .catch(function (error) {
        console.log('Ошибка в 2b.js (todos):', error);
    });
