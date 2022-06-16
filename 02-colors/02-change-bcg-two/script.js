// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {

    const btn = document.querySelector('#run');
    btn.addEventListener('click', function onClick() {
        let colorInput = document.querySelector('#color').value
        console.log(colorInput)
        document.body.style.backgroundColor = colorInput
    })



// })();