function closureFunction(number) {

	  var closureVariable = 0;

	  console.log("closureVariable is equal to:" + closureVariable)

	  function countUp() {

			closureVariable++;
			console.log("Inside countUp function closureVariable is equal to:" + closureVariable)
			return closureVariable + number;
		    
	  }

	  return countUp;
};

var firstClosure = closureFunction(5);

var secondClosure = closureFunction(15);

document.getElementById('submit').addEventListener('click', function (e) {

	  e.preventDefault();

	  document.getElementById('firstDivID').innerHTML = firstClosure();

   	  document.getElementById('secondDivID').innerHTML = secondClosure();

});