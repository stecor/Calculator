var value = document.getElementById('value');

//var result = 0;
//var calc = "null";
value.innerHTML = 0;
var temp = 0;
var sign = false;

document.getElementById('0').addEventListener('click', function(){ calculator(0);});
document.getElementById('1').addEventListener('click', function(){ calculator(1);});
document.getElementById('2').addEventListener('click', function(){ calculator(2);});
document.getElementById('3').addEventListener('click', function(){ calculator(3);});
document.getElementById('4').addEventListener('click', function(){ calculator(4);});
document.getElementById('5').addEventListener('click', function(){ calculator(5);});
document.getElementById('6').addEventListener('click', function(){ calculator(6);});
document.getElementById('7').addEventListener('click', function(){ calculator(7);});
document.getElementById('8').addEventListener('click', function(){ calculator(8);});
document.getElementById('9').addEventListener('click', function(){ calculator(9);});
document.getElementById('AC').addEventListener("click", reset);
document.getElementById('.').addEventListener("click", function(){ calculator(".");});
document.getElementById('%').addEventListener("click", function(){ calculator("%");});
document.getElementById('/').addEventListener("click", function(){ calculator("/");});
document.getElementById('*').addEventListener("click", function(){ calculator("*");});
document.getElementById('+').addEventListener("click", function(){ calculator("+");});
document.getElementById('-').addEventListener("click", function(){ calculator("-");});
document.getElementById('=').addEventListener("click", function(){ calculator("=");});

function reset(){
  value.innerHTML = 0;
  temp = 0;
}

function calculator(data){

  if(value.innerHTML === "0"){
    value.innerHTML="";
  }

  switch (data) {
      case ("="):   var calcule = eval(temp);
                    value.innerHTML = calcule;
                    console.log(temp);
                    break;

      default:
                        value.innerHTML = "";
                        value.innerHTML += data;
                        temp += data;

  }

}
