// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const btn = document.querySelector('#run')
   btn.addEventListener('click', function random_bg_color() {
       var x = Math.floor(Math.random() * 256);
       var y = Math.floor(Math.random() * 256);
       var z = Math.floor(Math.random() * 256);
       var bgColor = "rgb(" + x + "," + y + "," + z + ")";
       console.log(bgColor);

       document.body.style.background = bgColor;
   } )



})();