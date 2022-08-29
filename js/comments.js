const loadComments = () => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data))
}

const displayComments = (comments) => {
  const commentContainer = document.getElementById('comments-container');
  const srv = comments.forEach(data => {
    console.log(data)
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
              <p class="card-text">${data.body}
              </p>
            </div>
          </div>
        </div>
    `;
    commentContainer.appendChild(commentDiv)




  });



}





loadComments()

