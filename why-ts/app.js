// api url

var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {String} street
 * @property {String} city
 */

/**
 * @typedef {object} User
 * @property {String} name
 * @property {String} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
    return axios.get(url);
}

function startApp() {
    fetchUser()
        .then(function (response) {
            console.log(response);
            user = response.data;
            username.innerText = user[0].name;
            email.innerText = user[0].email;
            address.innerText = user[0].address.street;
        })
        .catch(function (error) {
            console.log(error);
        });
}

startApp();