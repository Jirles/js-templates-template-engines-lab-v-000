function createPost() {
  // build page-content? 
  // grab values from form
  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;
  const author = document.getElementById('post-author').value;
  // link up template through lodash to script tag
  const postTemplate = _.template(document.getElementById('post-template').innerHTML);
  // grab where posts will go
  const postDiv = document.getElementById('visible-posts');

  // add data into template
  const newPost = postTemplate({'title': title, 'content': content, 'author': author });
  // add text to div
  postDiv.innerHTML += newPost;
};

function postComment() {
  const comment = document.getElementById('comment-content').value;
  const commenter = document.getElementById('comment-commenter').value;

  const newCommentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  const commentsDiv = document.getElementById('visible-comments');

  const newComment = newCommentTemplate({'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += newComment;
};
