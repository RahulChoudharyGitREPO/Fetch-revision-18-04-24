const fetchButton = document.getElementById('fetchButton');
const userContainer = document.getElementById('userContainer');

fetchButton.addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => displayUsers(data.data))
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsers(users) {
    userContainer.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const name = document.createElement('p');
        name.textContent = `Name: ${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = `Avatar for ${user.first_name} ${user.last_name}`;

        userDiv.appendChild(name);
        userDiv.appendChild(email);
        userDiv.appendChild(avatar);

        userContainer.appendChild(userDiv);
    });
}
