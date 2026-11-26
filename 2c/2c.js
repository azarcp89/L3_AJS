var BASE = 'https://jsonplaceholder.typicode.com';

function sortPosts(posts) {
    posts.sort(function (a, b) {
        return b.title.length - a.title.length;
    });
    return posts;
}

function sortComments(comments) {
    comments.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    return comments;
}

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

function filterTodos(todos) {
    return todos.filter(function (todo) {
        return todo.completed === false;
    });
}

async function getPosts() {
    var response = await fetch(BASE + '/posts');
    var posts = await response.json();
    return sortPosts(posts);
}

async function getComments() {
    var response = await fetch(BASE + '/comments');
    var comments = await response.json();
    return sortComments(comments);
}

async function getUsers() {
    var response = await fetch(BASE + '/users');
    var users = await response.json();
    return cutUsers(users);
}

async function getTodos() {
    var response = await fetch(BASE + '/todos');
    var todos = await response.json();
    return filterTodos(todos);
}

getPosts().then(function (data) {
    console.log('2c-posts:', data);
})

getComments().then(function (data) {
    console.log('2c-comments:', data);
})

getUsers().then(function (data) {
    console.log('2c-users:', data);
})

getTodos().then(function (data) {
    console.log('2c-todos:', data);
}).catch(function (e) { console.log('Ошибка 2c todos:', e); });
