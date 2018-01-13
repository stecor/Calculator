var value = document.getElementById('value');
var temp = [];
var sign = false;

//Linking button values 
document.getElementById('0').addEventListener('click', function(){ calculator(0);});
document.getElementById('1').addEventListener('click', function(){ calculator(1);});
document.getElementById('2').addEventListener('click', function(){ calculator(2);});
document.getElementById('3').addEventListener('click', function(){ calculator(3);});
document.getElementById('4').addEventListener('click', function(){ calculator(4);});
document.getElementById('5').addEventListener('click', function(){ calculator(5);});
document.getElementById('6').addEventListener('click', function(){ calculator(6);});
document.getElementById('7').addEventListener('click', function(){ calculator(7);});
document.getElementById('8').addEventListener('click', function(){ calculator("8");});
document.getElementById('9').addEventListener('click', function(){ calculator(9);});
document.getElementById('AC').addEventListener("click", allClear);
document.getElementById('CE').addEventListener("click", clearEntry);
document.getElementById('.').addEventListener("click", function(){ calculator(".");});
document.getElementById('%').addEventListener("click", function(){ calculator("%");});
document.getElementById('/').addEventListener("click", function(){ calculator("/");});
document.getElementById('*').addEventListener("click", function(){ calculator("*");});
document.getElementById('+').addEventListener("click", function(){ calculator("+");});
document.getElementById('-').addEventListener("click", function(){ calculator("-");});
document.getElementById('=').addEventListener("click", function(){ calculator("=");});

// Erase all operation
function allClear(){
  value.innerHTML = "";
  temp = [];
}

// Erase just the last operation
function clearEntry(){
  temp.pop();
  value.innerHTML = temp.join("");
  console.log(temp);
}

function calculator(data){

  switch (data) {
      
      // Case equal finalize operation
      case ("="):   
      
            var str = temp.join("");
            var calcule = eval(str);
            value.innerHTML = calcule;
            console.log(calcule);
            break;

      // Enter values into array 
      default:       
                        
            value.innerHTML += data;
            if(data == "%"){
              temp.push("/100");      
            }else{
              temp.push(data);          
            }              
  }
}
