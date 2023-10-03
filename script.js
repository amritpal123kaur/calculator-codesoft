function fn(input){
    var a = document.getElementById('response');
 a.value += input;
}
function Result() {
 var num1 = document.getElementById('response').value;
 var num2 = eval(num1);
 document.getElementById('response').value = num2;
}
function Clear() {
 var b = document.getElementById('response');
 b.value = '';
}
function Back() {
 var c = document.getElementById('response');
 c.value = c.value.slice(0,-1);
}