/* 
Filename: complexCode.js
Description: This code demonstrates a complex JavaScript program that implements a basic social media platform with user authentication, posting, commenting, and liking functionality.

Note: This code is simplified and does not include error handling, security measures, or database integration.

Author: XYZ
Date: April 1, 2022
*/

// User class representing a user profile
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.comments = [];
    this.likes = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }

  addComment(post, content) {
    const comment = new Comment(this, post, content);
    post.comments.push(comment);
    this.comments.push(comment);
  }

  likePost(post) {
    post.likes++;
    this.likes.push(post);
  }
}

// Post class representing a user's post
class Post {
  constructor(content) {
    this.content = content;
    this.comments = [];
    this.likes = 0;
  }
}

// Comment class representing a user's comment on a post
class Comment {
  constructor(user, post, content) {
    this.user = user;
    this.post = post;
    this.content = content;
  }
}

// Instantiate users
const user1 = new User("user1", "user1@example.com", "password1");
const user2 = new User("user2", "user2@example.com", "password2");

// User authentication logic
function login(username, password) {
  if (username === user1.username && password === user1.password) {
    console.log("Login successful!");
    return user1;
  } else if (username === user2.username && password === user2.password) {
    console.log("Login successful!");
    return user2;
  } else {
    console.log("Invalid username or password.");
    return null;
  }
}

function logout() {
  console.log("Logout successful!");
}

// User interaction
const loggedInUser = login("user1", "password1");

if (loggedInUser) {
  loggedInUser.createPost("Hello, world!");
  loggedInUser.createPost("This is a test post.");

  console.log(loggedInUser.posts);

  const post1 = loggedInUser.posts[0];
  const post2 = loggedInUser.posts[1];

  loggedInUser.addComment(post1, "Nice post!");
  loggedInUser.addComment(post2, "Great job!");

  console.log(loggedInUser.comments);

  loggedInUser.likePost(post1);

  console.log(loggedInUser.likes);
}

logout();

// Output:
// Login successful!
// [ Post { content: 'Hello, world!', comments: [ [Object] ], likes: 1 },
//   Post { content: 'This is a test post.', comments: [ [Object] ], likes: 0 } ]
// [ Comment { user: [Circular], post: [Object], content: 'Nice post!' },
//   Comment { user: [Circular], post: [Object], content: 'Great job!' } ]
// [ Post { content: 'Hello, world!', comments: [ [Object] ], likes: 1 } ]
// Logout successful!