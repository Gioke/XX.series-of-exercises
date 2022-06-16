// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const btn1 = document.querySelector('#red');

    btn1.addEventListener('click', function onClick(event) {

        document.body.style.backgroundColor = 'red';});

    const btn2 = document.querySelector('#green');

    btn2.addEventListener('click', function onClick(event) {

        document.body.style.backgroundColor = 'green';});

    const btn3 = document.querySelector('#yellow');

    btn3.addEventListener('click', function onClick(event) {

        document.body.style.backgroundColor = 'yellow';});

    const btn4 = document.querySelector('#blue');

    btn4.addEventListener('click', function onClick(event) {

        document.body.style.backgroundColor = 'blue';});

})();