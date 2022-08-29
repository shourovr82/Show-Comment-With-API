const loadComments = () => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data.slice(0, 100)));
}

const displayComments = (comments) => {
  const commentContainer = document.getElementById('comments-container');
  const srv = comments.forEach(data => {
    // console.log(data)
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('row');
    commentDiv.classList.add('g-3');
    commentDiv.innerHTML = `
            <div class="row g-3">
          <div class="card text-bg-success col-12">
            <div class="card-header d-flex justify-content-between">
            <div>Post Id : ${data.postId}</div>
            <div>ID : ${data.id}</div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Title : ${data.name}</h5>
              <p class="card-text">${data.body}</p>
              <button onclick ="loadCommentDetail(${data.id ? data.id : "not available"})"  class ="btn  text-white btn-success border py-1">Show Details</button>
            </div>
          </div>
        </div>
    `;
    commentContainer.appendChild(commentDiv)
  });
}


const loadCommentDetail = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => displayCommentDetails(data))
}

const displayCommentDetails = (data) => {
  const commentDetailContainer = document.getElementById('comment-detail');
  commentDetailContainer.innerHTML = ''
  const detailDiv = document.createElement('div');
  detailDiv.classList.add('container')
  detailDiv.classList.add('w-50')


  detailDiv.innerHTML = `
<div class="alert alert-success " role="alert">
  <h5 class="alert-heading">Post Title : ${data.title}</h5>
  <p>Post : ${data.body}</p>
  <hr>
  <div class="d-flex justify-content-between align-items-center"> 
      <button onclick ="hideDetails(${data.id ? data.id : "not available"} )"  class ="btn  text-white btn-success border py-1">Hide Details</button>
      <p>Post Id : ${data.id}</p>
  </div>

</div>
  `;

  {/* <div onclick="loadAuthorDetail('${book.author_key ? book.author_key[0] : " n /a"}')" class="card h-100 text-center" > */ }



  commentDetailContainer.appendChild(detailDiv)
}

const hideDetails = () => {
  const detailContainer = document.getElementById('comment-detail');
  detailContainer.innerHTML = '';
}




loadComments()

