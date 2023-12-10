document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        let user = document.querySelector('#name').value;
        alert(`Hello, ${user}!`);
    }
});