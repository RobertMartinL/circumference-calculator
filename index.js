

document.getElementById('submit').onclick = function() {

    let measurement = document.getElementById('userMeasurement').value;
    let newNum = Math.round( Math.PI * 2 * measurement * 100) / 100;
    let response = "The circumference of a circle with a radius of " + measurement + " is " + newNum 
    console.log(response)
    printResponse()
    function printResponse() {
        document.getElementById('response').innerHTML = response
    }
}



