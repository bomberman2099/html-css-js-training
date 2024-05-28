function oddOrEven(event) {
    event.preventDefault();
    let input = document.getElementById('numb').value; 
    let box = document.getElementById('output-box');
    let output = document.getElementById('output');
    if (input % 2 === 0) {
        output.innerHTML = "That's an <span>Even</span> number!";
    } else {
        output.innerHTML = "That's an <span>Odd</span> number!";
    }
    box.style.display = 'block';
}
