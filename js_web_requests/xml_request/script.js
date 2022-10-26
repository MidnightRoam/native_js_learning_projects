const loadButton = document.querySelector('#loadButton')
const result = document.querySelector('#result');

loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://127.0.0.1:3000');
    xhr.responseType = 'json';
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status >= 400) {
            console.log('Some error');
        } else {
            const users = xhr.response;

            result.innerHTML = '';
            for (const user of users) {
                const userDom = createFriendDom(user);
                result.appendChild(userDom);
            }
        }
    })
});
function createFriendDom(user) {
    const div = document.createElement('div');
    div.classList.add('user');
    div.textContent = `${user.name}  (${user.email})`;
    return div;
}