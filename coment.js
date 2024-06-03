document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const date = new Date().toLocaleDateString();
        const commentText = document.getElementById('comment').value;

        if (name && commentText) {
            addComment(name, date, commentText);
            commentForm.reset();
        } else {
            alert('Будь ласка, заповніть усі поля.');
        }
    });

    function addComment(name, date, text) {
        const li = document.createElement('li');
        const commentInfo = document.createElement('p');
        const commentText = document.createElement('p');

        commentInfo.innerHTML = `<strong>${name}</strong>, ${date}`;
        commentText.textContent = text;

        li.appendChild(commentInfo);
        li.appendChild(commentText);
        commentList.appendChild(li);
    }
});
