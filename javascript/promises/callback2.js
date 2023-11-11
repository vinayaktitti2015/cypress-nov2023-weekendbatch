const blogs = [
  { title: "selenium blog", author: "thoughtworks" },
  { title: "cypress blog", author: "Brian Mann" },
];

// fetch get method
function getPosts() {
  setTimeout(function () {
    let output = " ";
    blogs.forEach((post) => {
      output += `${post.title}` + " " + `${post.author}`;
    });
    console.log(`blogs posts are: >>>` + output + ` ` + " ");
  }, 5000);
}

// fetch POST method
function createPosts(post, callback) {
  setTimeout(function () {
    blogs.push(post);
    callback;
  }, 1000);
}

// add new blogs to the array object
createPosts(
  { title: "Playwrights", author: "Microsoft Corporation" },
  getPosts()
);
createPosts(
    { title: "katalon Studio", author: "katalon Corporation" },
    getPosts()
  );
