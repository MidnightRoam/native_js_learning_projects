const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

myButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem);
    });

    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    nameInput.value = '';
});