function checkPrime(event) {
    event.preventDefault();
    let input = document.getElementById("num").value;
    let box = document.getElementById('output-box');
    let output = document.getElementById('output');
    let counter = 0;
    for(let i = 1; i <= input ; i++){
        if (input % i == 0){
            counter++
        }
    }
    if (counter <=2){
        output.innerHTML = "<span>" + input + "</span> is prime number!";
    }
    else{
        output.innerHTML = "<span>" + input + "</span> is <span>not</span><br> prime number!";
    }
    box.style.display = 'block';
}