// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const age = prompt('What is your age');
    const gender = prompt('What is your gender');
    const city = prompt('What city do u life in');

   if (confirm(age + "," + gender + "," + city) !== true){
       window.location.reload();
   }

})();