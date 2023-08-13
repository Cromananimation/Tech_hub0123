const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
    const type = document.querySelector('#post-type').value.trim();

    if (title && body && type) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body, type }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to post.');
        }
    }
};

const editPostFormHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#edit-post-id').value.trim();
    const title = document.querySelector('#edit-post-title').value.trim();
    const body = document.querySelector('#edit-post-body').value.trim();
    const type = document.querySelector('#edit-post-type').value.trim();

    if (id && title && body && type) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ id, title, body, type }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to post.');
        }
    }
};

const dialog = document.getElementById("post-dialog");
const editDialog = document.getElementById("edit-post-dialog");

// Update button opens a modal dialog
document.getElementById("new-post").addEventListener("click", () => {
    dialog.showModal();
});

// Form cancel button closes the dialog box
document.getElementById("post-cancel").addEventListener("click", () => {
    dialog.close();
});

document
    .querySelector('#post-save')
    .addEventListener('click', postFormHandler);

document
    .getElementById("edit-post-save")
    .addEventListener('click', editPostFormHandler);

// Form cancel button closes the dialog box
document.getElementById("edit-post-cancel").addEventListener("click", () => {
    editDialog.close();
});

const editButtons = document.querySelectorAll(".edit-post");
editButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
        const response = await fetch(`/api/posts/${event.target.id}`);
        const data = await response.json();

        const id = document.getElementById("edit-post-id");
        id.value = data.id;
        const title = document.getElementById("edit-post-title");
        title.value = data.title;
        const type = document.getElementById("edit-post-type");
        type.value = data.type;
        const body = document.getElementById("edit-post-body");
        body.value = data.body;

        editDialog.showModal();
    }
    )
});
