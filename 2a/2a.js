var BASE = 'https://jsonplaceholder.typicode.com';

function getData(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', BASE + path);
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText));
    };
    xhr.send();
}

function sortPosts(posts) {
    posts.sort(function (a, b) {
        return b.title.length - a.title.length;
    });
    return posts;
}

function getPosts(callback) {
    getData('/posts', function (posts) {
        callback(sortPosts(posts));
    });
}

function sortComments(comments) {
    comments.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    return comments;
}

function getComments(callback) {
    getData('/comments', function (comments) {
        callback(sortComments(comments));
    });
}

getPosts(function (data) {
    console.log('2a.i-posts:', data);
});

getComments(function (data) {
    console.log('2a.ii-comments:', data);
});