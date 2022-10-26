const loadButton = document.querySelector('#loadButton')
const result = document.querySelector('#result');

loadButton.addEventListener('click', () => {
    fetch('http://127.0.0.1:3000/')
        .then(response => {
            if (response.status >= 400) {
                return Promise.reject();
            }

            return response.json();
        })
        .then(users => {
            for (const user of users) {
                const userNode = createUserNode(user);
                result.appendChild(userNode);
            }
        })
        .catch(() => console.error('Some error'));
});

function createUserNode(user) {
    const div = document.createElement('div');
    div.classList.add('user');
    div.textContent = `${user.name}  (${user.email})`;
    return div;
}