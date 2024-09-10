const post = {
    username : "@AkhiAzimPapri",
    content : "This is my #firstPost",
    likes :  150,
    repost : 5,
    tags : ["@AkhiAzimPapri","@ApnaCollege","@delta"]
};

console.log(post);
//Get values.
console.log(post.username);
console.log(post["content"]);
console.log(post.tags[0]);
// console.log(post["tag[2]"]); it's not possible.