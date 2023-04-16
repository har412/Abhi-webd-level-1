// console.log("Hello Abhi")
// var num1 = 3;
// var num2 = 5;
// var result = num1 + num2;
// console.log(`Sum of ${num1} and ${num2} is ${result}`)


function show_the_text(){
    document.getElementById('text').innerHTML="Abhi is hacked for 2 seconds"
    setTimeout(() => {
        document.getElementById('text').innerHTML="Now you recovered"
        
    }, 2000);
}