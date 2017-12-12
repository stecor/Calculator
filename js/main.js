document.getElementById('num0').addEventListener('click', function(){ myNum(0);});
document.getElementById('num1').addEventListener('click', function(){ myNum(1);});
document.getElementById('num2').addEventListener('click', function(){ myNum(2);});
document.getElementById('num3').addEventListener('click', function(){ myNum(3);});
document.getElementById('num4').addEventListener('click', function(){ myNum(4);});
document.getElementById('num5').addEventListener('click', function(){ myNum(5);});
document.getElementById('num6').addEventListener('click', function(){ myNum(6);});
document.getElementById('num7').addEventListener('click', function(){ myNum(7);});
document.getElementById('num8').addEventListener('click', function(){ myNum(8);});
document.getElementById('num9').addEventListener('click', function(){ myNum(9);});
var value = document.getElementById('value');
document.getElementById('comAC').addEventListener("click",myReset);
var result = 0;
var numero = 0;




function myReset(){
  value.innerHTML = 0;
}

function myNum(num){
  if ( value.innerHTML == "0"){
    value.innerHTML = num ;
  }else{
    value.innerHTML += num ;
  }
};

value.innerHTML = result;
